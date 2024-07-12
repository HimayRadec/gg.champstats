/* 
Created By: Himay on 5/21/2024
Lasted Edited By: Himay 7/07/2024
File Level: Junior Developer
Overview: This file calls the Riot API to get the match IDs of a player using their PUUID.
The values required are the PUUID of the player. The API key is also required.

Link to the API: https://developer.riotgames.com/apis#match-v5/GET_getMatch
*/

import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
   let matchId = request.nextUrl.searchParams.get('matchId');
   const apiKey = process.env.RIOT_API_KEY;

   if (matchId == 'undefined') return new Response(JSON.stringify({ error: 'Missing matchId' }), { status: 404 });


   try {
      const response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`);
      const data = await response.json();

      //TODO: create status code dictionary
      if (data.status && data.status.status_code === 404) return new Response(JSON.stringify({ error: 'Match not found' }), { status: 404 });

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
