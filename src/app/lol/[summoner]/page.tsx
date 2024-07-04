/*
Created By Himay on 3/07/2024
Lasted Edited By: Himay 3/07/2024
File Level: Junior Developer
Overview: This file is the route for the Summoner Page. This file is called when a user searches for a summoner.
Two values are reuqired, the gameName and tagLine of the player.
Example URL: champstats.gg/lol/radec%20himay-NA1
*/
'use client';

import { useEffect, useState } from "react";
import { fetchPUUID } from "@/utils/formatApiData/fetchLeagueOfLegendsData";

export default function Page({ params }: { params: { summoner: string } }) {
   const gameName = params.summoner.split('-')[0];
   const tagLine = params.summoner.split('-')[1];
   const [puuid, setPuuid] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            console.log(`Calling fetchPUUID`)
            const data = await fetchPUUID(gameName, tagLine);
            setPuuid(data); // Update state with fetched data
         }
         catch (error: any) {
            setError(error.message); // Update state to handle error
         }
         finally {
            setLoading(false); // Update loading state
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
      <div>
         <h1>Summoner Page</h1>
         <p>Game Name: {gameName}</p>
         <p>Tag Line: {tagLine}</p>
         <p>PUUID: {puuid}</p> {/* Display fetched PUUID */}
      </div>
   );
}
