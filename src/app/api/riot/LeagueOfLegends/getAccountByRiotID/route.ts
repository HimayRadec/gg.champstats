/* 
Created By Himay on 5/21/2024
Lasted Edited By: Himay 5/21/2024
File Level: Junior Developer
Overview: Gets the PUUID of a player using their game name and tag line.
Example URL: /api/riot/getAccountPUUID?gameName=radechimay&tagLine=NA1
Note: gameName is valid as 'radechimay', 'radec himay' and 'radec%20himay' and are NOT case sensitive
Link to the API: https://developer.riotgames.com/apis#account-v1/GET_getByRiotId
*/
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
   console.log(`Calling getAccountByRiotID API`)

   const gameName = request.nextUrl.searchParams.get('gameName');
   const tagLine = request.nextUrl.searchParams.get('tagLine');
   const apiKey = process.env.RIOT_API_KEY;

   // Check if gameName, tagLine, and apiKey are provided
   if (gameName == 'undefined' || tagLine == 'undefined') return new Response(JSON.stringify({ error: 'Missing game name or tag line' }), { status: 404 });
   if (!apiKey) return new Response('Missing API Key', { status: 500 });

   try {
      const response = await fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`);
      console.log(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`)
      const data = await response.json();

      // Player not found
      if (data.status && data.status.status_code === 404) return new Response(JSON.stringify({ error: 'Player not found' }), { status: 404 });

      return new Response(JSON.stringify
         ({ data }),
         { status: 200 }
      );
   }
   catch (error) {
      console.error('Error fetching PUUID:', error);

      // Invalid API URL
      return new Response(JSON.stringify
         ({ error: 'Invalid API URL' }),
         { status: 500 }
      );
   }

}
