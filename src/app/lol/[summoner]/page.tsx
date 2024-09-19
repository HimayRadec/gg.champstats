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
import { fetchAccountByRiotID, fetchMatchIdsByPUUID } from "@/utils/formatApiData/fetchLeagueOfLegendsData";
import { AccountInformation } from "@/types/LeagueOfLegends";
import SummonerProfileComponent from "@/components/SummonerProfile/SummonerProfile";
import { MatchSummaryCard } from "@/components/SummonerProfile/MatchSummaryCard";

export default function Page({ params }: { params: { summoner: string } }) {
   const gameName = params.summoner.split('-')[0];
   const tagLine = params.summoner.split('-')[1];

   const [accountData, setAccountData] = useState<AccountInformation | null>(null);
   const [matchIds, setMatchIds] = useState<string[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const fetchedAccountData: AccountInformation = await fetchAccountByRiotID(gameName, tagLine);
            setAccountData(fetchedAccountData);

            const fetchedMatchIds: string[] = await fetchMatchIdsByPUUID(fetchedAccountData.puuid);
            setMatchIds(fetchedMatchIds);

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
               <div className="flex flex-col gap-y-1">
                  {matchIds.slice(0, 5).map((matchId) => (
                     <MatchSummaryCard key={matchId} matchId={matchId} puuid={accountData.puuid} />
                  ))}

                  {/* <MatchSummaryCard matchId={matchIds[0]} puuid={accountData.puuid} /> */}
                  {matchIds?.map((matchId) => (
                     <div key={matchId}>
                        <p>{matchId}</p>
                     </div>
                  ))}
               </div>


            </>
         )}
      </div>
   );

}
