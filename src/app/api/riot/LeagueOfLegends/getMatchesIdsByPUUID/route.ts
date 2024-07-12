/* 
Created By: Himay on 5/21/2024
Lasted Edited By: Himay 7/07/2024
File Level: Junior Developer
Overview: This file calls the Riot API to return a strng array of match IDs of a player using their PUUID.
The values required are the PUUID of the player. The API key is also required.

Link to the API: https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID
*/

import { type NextRequest } from 'next/server';


export async function GET(request: NextRequest) {

   const puuid = request.nextUrl.searchParams.get('puuid');
   const apiKey = process.env.RIOT_API_KEY;

   if (puuid == 'undefined') return new Response(JSON.stringify({ error: 'Missing puuid' }), { status: 404 });
   if (!apiKey) return new Response('Missing API Key', { status: 500 });

   try {
      const response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${apiKey}`);
      const data = await response.json();

      // Player not found
      if (data.status && data.status.status_code === 404) return new Response(JSON.stringify({ error: 'Player not found' }), { status: 404 });

      return new Response(JSON.stringify
         ({ data }),
         { status: 200 }
      );
   }
   catch (error) {
      console.error('Error fetching Matches:', error);

      // Invalid API URL
      return new Response(JSON.stringify
         ({ error: 'Invalid API URL' }),
         { status: 500 }
      );
   }
}
