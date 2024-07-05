/* 
Created By Himay on 5/21/2024
Lasted Edited By: Himay 5/21/2024
File Level: Junior Developer
Overview: Gets summoner information using their PUUID. 
Example URL: /api/riot/getAccountPUUID?gameName=radec%20himay&tagLine=NA1 TODO: Update this URL

Link to the API: https://developer.riotgames.com/apis#summoner-v4/GET_getByPUUID
*/
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
   console.log(`Calling Riot API`)

   const puuid = request.nextUrl.searchParams.get('puuid');
   const apiKey = process.env.RIOT_API_KEY;

   // Check if gameName, tagLine, and apiKey are provided
   if (puuid == 'undefined') return new Response(JSON.stringify({ error: 'Missing puuid' }), { status: 404 });
   if (!apiKey) return new Response('Missing API Key', { status: 500 });

   try {
      const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`);
      const data = await response.json();

      // Player not found
      if (data.status && data.status.status_code === 404) return new Response(JSON.stringify({ error: 'Player not found' }), { status: 404 });

      return new Response(JSON.stringify({ data }), { status: 200 });
   }
   catch (error) {
      console.error('Error fetching PUUID:', error);

      // Invalid API URL
      return new Response(JSON.stringify({ error: 'Invalid API URL' }), { status: 500 });
   }

}

