/*
Created By Himay on 3/07/2024
Lasted Edited By: Himay 3/07/2024
File Level: Junior Developer
Overview: This file is the route for the Summoner Page. This file is called when a user searches for a summoner.
Two values are reuqired, the gameName and tagLine of the player.
Example URL: champstats.gg/lol/radec%20himay-NA1
*/
'use client'

import { useEffect, useState } from "react";

export default function Page({ params }: { params: { summoner: string } }) {
   const gameName = params.summoner.split('-')[0];
   const tagLine = params.summoner.split('-')[1];
   const [puuid, setPuuid] = useState<string | null>(null); // State to hold PUUID

   useEffect(() => {
      const fetchPuuid = async () => {
         try {
            const res = await fetch(`/api/riot/getAccountPUUID?gameName=${gameName}&tagLine=${tagLine}`);
            if (!res.ok) {
               throw new Error(`Failed to fetch PUUID, status ${res.status}`);
            }
            const data = await res.json();
            setPuuid(data.puuid); // Update state with fetched PUUID
         } catch (error) {
            console.error('Error fetching PUUID:', error);
            setPuuid(null); // Reset state to handle error
         }
      };

      fetchPuuid();
   }, [gameName, tagLine]);

   return (
      <div>
         <h1>Summoner Page</h1>
         <p>Game Name: {gameName}</p>
         <p>Tag Line: {tagLine}</p>
         <p>PUUID: {puuid || 'Loading...'}</p> {/* Display 'Loading...' until data is fetched */}
      </div>
   );
}
