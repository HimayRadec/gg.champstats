/*
Created By: Himay on 7/03/2024
Lasted Edited By: Himay 7/12/2024
File Level: Junior Developer
Overview: This file is the route for the Summoner Page. This file is called when a user searches for a summoner.
Two values are required, the gameName and tagLine of the player.
Example URL: champstats.gg/lol/radec%20himay-NA1
*/
'use client';

//TODO: Figure out a way to stop the match summary card from re-rendering every time the page is refreshed
//TODO: Add a loading spinner for the match summary card
//TODO: Add a 404 page for when the summoner is not found
//TODO: Only fetch 10 match ids at a time

import { useEffect, useState } from "react";
import { fetchAccountByRiotID, fetchMatchIdsByPUUID, fetchMatchByMatchID } from "@/utils/formatApiData/fetchLeagueOfLegendsData";
import { AccountInformation, MatchDto } from "@/types/LeagueOfLegends";
import SummonerProfileComponent from "@/components/SummonerProfile/SummonerProfile";
import { MatchSummaryCard } from "@/components/SummonerProfile/MatchSummaryCard";

export default function Page({ params }: { params: { summoner: string } }) {
   const gameName = params.summoner.split('-')[0];
   const tagLine = params.summoner.split('-')[1];

   const [accountData, setAccountData] = useState<AccountInformation | null>(null);
   const [matchIds, setMatchIds] = useState<string[]>([]);
   const [matchesData, setMatchesData] = useState<MatchDto[]>([]);

   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            // Fetch the account data
            const fetchedAccountData: AccountInformation = await fetchAccountByRiotID(gameName, tagLine);
            setAccountData(fetchedAccountData);

            // Fetch the last 20 match ids of the account
            const fetchedMatchIds: string[] = await fetchMatchIdsByPUUID(fetchedAccountData.puuid);
            setMatchIds(fetchedMatchIds);

            // Fetch the match data 
            const initialMatches = await Promise.all(
               fetchedMatchIds.slice(0, 5).map((matchId) => fetchMatchByMatchID(matchId))
            );
            setMatchesData(initialMatches);

         }
         catch (error: any) {
            setError(error.message);
         }
         finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [gameName, tagLine]);


   if (loading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return <p>{error}</p>;
   }

   return (
      <div className="flex flex-col border max-w-[1000px] m-auto">
         {accountData && (
            <>
               <div className="mb-2">
                  <SummonerProfileComponent accountData={accountData} />
               </div>
               <div>

               </div>

               <div className="bg-blue-500">
                  Overview
               </div>

               <div className=" flex">

                  <div className="flex flex-col">

                     <div>
                        Current Rank
                     </div>

                     <div>
                        Flex Rank
                     </div>

                     <div>
                        Champion Stats
                     </div>

                     <div>
                        Recently Played Champions
                     </div>

                  </div>

                  <div className="flex flex-col">

                     <div>

                     </div>

                     <div>
                        <div className="flex flex-col gap-y-1">
                           {matchesData.map((match, index) => (
                              <MatchSummaryCard
                                 key={match.info.gameId}
                                 matchData={match}
                                 puuid={accountData.puuid}
                              />
                           ))}
                        </div>
                     </div>

                  </div>

               </div>


            </>
         )}
      </div>
   );

}