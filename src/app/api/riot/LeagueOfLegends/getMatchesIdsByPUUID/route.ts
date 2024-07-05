/* 
Created By: Himay on 5/21/2024
Lasted Edited By: Himay 5/21/2024
File Level: Junior Developer
Overview: This file calls the Riot API to get the match IDs of a player using their PUUID.
The values required are the PUUID of the player. The API key is also required.

Link to the API: https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID
*/

import { type NextRequest } from 'next/server';


export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   let puuid = searchParams.get('puuid');
   const apiKey = process.env.RIOT_API_KEY;

   if (!puuid) {
      return new Response(JSON.stringify({ error: 'PUUID is required' }), {
         status: 400,
         headers: { 'Content-Type': 'application/json' },
      });
   }

   try {
      console.log(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${apiKey}`)
      const response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${apiKey}`);

      if (!response.ok) {
         const message = await response.json();
         return new Response(JSON.stringify({ error: message }), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' },
         });
      }

      const data = await response.json();
      return new Response(JSON.stringify(data), {
         status: 200,
         headers: { 'Content-Type': 'application/json' },
      });
   } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
         status: 500,
         headers: { 'Content-Type': 'application/json' },
      });
   }
}
