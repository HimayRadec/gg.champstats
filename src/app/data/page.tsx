"use client";
import { useEffect, useState } from "react";

export default function Data() {
    const [data, setData] = useState({
        rankData: null,
        accountData: null,
        matchIdData: null,
        matchData: null
    });
    //Sets which rank i will grab data from
    const gameType = "RANKED_SOLO_5x5";
    const rank = "GOLD";
    const division = "II";

    //All fetches will be completed inside this
    useEffect(() => {
        //The main fetch for fetching data
        const fetchData = async () => {
            const API_KEY = process.env.NEXT_PUBLIC_LEAGUE_API_KEY ?? '';
            const APICallString = `https://na1.api.riotgames.com/lol/league/v4/entries/${gameType}/${rank}/${division}?page=1&api_key=${API_KEY}`;

            try {
                //fetches the rank data and will store it in response
                const response = await fetch(APICallString);
                if (response.ok) {
                    const rankData = await response.json();
                    setData(prevData => ({
                        ...prevData,
                        rankData
                    }));

                    // Process first summoner if available
                    if (rankData.length > 0) {
                        const selectedSummoner = rankData[2]; // You can choose another index if desired

                        //fetches the summoner 
                        await fetchMatchHistory(selectedSummoner.summonerId, API_KEY);
                    }
                } else {
                    console.error("API response error:", response.statusText);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchData();
    }, []);

    const fetchMatchHistory = async (summonerId: string, API_KEY: string) => {
        const APIFetchAccount = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${API_KEY}`;

        try {
            const response = await fetch(APIFetchAccount);
            if (response.ok) {
                const accountData = await response.json();
                setData(prevData => ({
                    ...prevData,
                    accountData
                }));

                const puuid = accountData.puuid;
                await fetchMatchIds(puuid, API_KEY);
            } else {
                console.error("API response error:", response.statusText);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    const fetchMatchIds = async (puuid: string, API_KEY: string) => {
        if (!puuid || !API_KEY) {
            console.error("Invalid inputs: PUUID or API_KEY is missing.");
            return;
        }

        const APIFetchMatchId = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${API_KEY}`;

        try {
            const response = await fetch(APIFetchMatchId);
            if (response.ok) {
                const matchIds = await response.json();
                setData(prevData => ({
                    ...prevData,
                    matchIdData: matchIds
                }));

                const matchOne = matchIds[0];
                await fetchMatchData(matchOne, API_KEY);
            } else {
                console.error("API response error:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    const fetchMatchData = async (matchOne: string, API_KEY: string) => {
        if (!matchOne || !API_KEY) {
            console.error("Invalid inputs: Match ID or API_KEY is missing.");
            return;
        }

        const FetchMatchData = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchOne}?api_key=${API_KEY}`;

        try {
            const response = await fetch(FetchMatchData);
            if (response.ok) {
                const matchData = await response.json();
                setData(prevData => ({
                    ...prevData,
                    matchData
                }));
            } else {
                console.error("API response error:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <>
            <div>Get Data from Riot API</div>
            <div>
                {/* {data.rankData && (
                    <div>
                        <h3>Rank Data</h3>
                        <pre>{JSON.stringify(data.rankData, null, 2)}</pre>
                    </div>
                )} */}
                {data.accountData && (
                    <div>
                        <h3>Account Data</h3>
                        <pre>{JSON.stringify(data.accountData, null, 2)}</pre>
                    </div>
                )}
                {data.matchIdData && (
                    <div>
                        <h3>Match ID Data</h3>
                        <pre>{JSON.stringify(data.matchIdData, null, 2)}</pre>
                    </div>
                )}
                {data.matchData && (
                    <div>
                        <h3>Match Data</h3>
                        <pre>{JSON.stringify(data.matchData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </>
    );
}