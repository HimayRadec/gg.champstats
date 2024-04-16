"use client";
import { useEffect, useState } from "react";

export default function Data() {
    const [rankData, setRankData] = useState<any>(null);
    const [accountData, setAccountData] = useState<any>(null);
    const [matchIdData, setMatchIdData] = useState<any>(null);
    const [matchData, setMatchData] = useState<any>(null);

    const gameType = "RANKED_SOLO_5x5";
    const rank = "GOLD";
    const division = "II";

    useEffect(() => {
        const fetchData = async () => {
            const API_KEY = process.env.NEXT_PUBLIC_LEAGUE_API_KEY ?? '';
            const APICallString = `https://na1.api.riotgames.com/lol/league/v4/entries/${gameType}/${rank}/${division}?page=1&api_key=${API_KEY}`;

            try {
                const response = await fetch(APICallString);
                if (response.ok) {
                    const data = await response.json();
                    setRankData(data);

                    // Limit the requests to one summoner
                    if (data.length > 0) {
                        // Select the first summoner from the data
                        const selectedSummoner = data[2];
                        // Fetch account data for the selected summoner
                        await fetchMatchHistory(selectedSummoner.summonerId, API_KEY, setAccountData, setMatchIdData, setMatchData);
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

    return (
        <>
            <div>Get Data from Riot API</div>
            <div>
                {rankData &&
                    <div>
                        <h3>Account Data</h3>
                        <pre>{JSON.stringify(accountData, null, 2)}</pre>
                    </div>
                }
                {accountData && (
                    <div>
                        <h3>Account Data</h3>
                        <pre>{JSON.stringify(accountData, null, 2)}</pre>
                    </div>
                )}
                {matchIdData && (
                    <div>
                        <h3>Match ID Data</h3>
                        <pre>{JSON.stringify(matchIdData, null, 2)}</pre>
                    </div>
                )}
                {matchData && (
                    <div>
                        <h3>Match Data</h3>
                        <pre>{JSON.stringify(matchData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </>
    );
}

async function fetchMatchHistory(
    summonerId: string,
    API_KEY: string,
    setAccountData: (data: any) => void,
    setMatchIdData: (data: any) => void,
    setMatchData: (data: any) => void
) {
    const APIFetchAccount = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${API_KEY}`;
    
    try {
        const response = await fetch(APIFetchAccount);
        if (response.ok) {
            const accData = await response.json();
            const puuid = accData.puuid;
            setAccountData(accData);
            
            await fetchMatchIds(puuid, API_KEY, setMatchIdData, setMatchData);
            // Fetch match IDs and match data for the selected summoner
            // using the PUUID from accData
        } else {
            console.error("API response error:", response.statusText);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Fetch match IDs for a summoner based on their PUUID
async function fetchMatchIds(
    puuid: string, 
    API_KEY: string, 
    setMatchIdData: (data: any) => void,
    setMatchData: (data: any) => void
) {
    // Validate the inputs
    if (!puuid || !API_KEY) {
        console.error("Invalid inputs: PUUID or API_KEY is missing.");
        return;
    }
    
    const APIFetchMatchId = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${API_KEY}`;

    try {
        const response = await fetch(APIFetchMatchId);
        
        if (response.ok) {
            const matchIds = await response.json();
            // Pass the fetched data to the setter function
            setMatchIdData(matchIds);
            const matchOne = matchIds[0];

            await fetchMatchData(matchOne, API_KEY, setMatchData)
        } else {
            // Log the error message if response is not okay
            console.error("API response error:", response.status, response.statusText);
        }
    } catch (error) {
        // Handle fetch error
        console.error("Fetch error:", error);
    }
}

// Fetch match data for a summoners match ids

async function fetchMatchData(
    matchOne: number, 
    API_KEY: string, 
    setMatchData: (data: any) => void
) {
    // Validate the inputs
    if (!matchOne || !API_KEY) {
        console.error("Invalid inputs: PUUID or API_KEY is missing.");
        return;
    }

    const FetchMatchData = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchOne}?api_key=${API_KEY}`;

    const response = await fetch(FetchMatchData);

    try{
        if(response.ok){
            const data = await response.json();

            setMatchData(data);

        }
        
    } catch(error) {
        // Handle fetch error
        console.error("Fetch error:", error);
    }

}
