/* 
Created By Himay on 5/21/2024
Lasted Edited By: Himay 5/21/2024
File Level: Junior Developer
Overview: Gets the PUUID of a player using their game name and tag line.
Example URL: /api/riot/getAccountPUUID?gameName=radec%20himay&tagLine=NA1


Link to the API: https://developer.riotgames.com/apis#account-v1/GET_getByRiotId
*/
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
   const gameName = request.nextUrl.searchParams.get('gameName')
   const tagLine = request.nextUrl.searchParams.get('tagLine')
   const apiKey = process.env.RIOT_API_KEY; // Replace with your actual Riot API key

   if (!gameName || !tagLine) return new Response('Missing gameName or tagLine', { status: 400 });

   try {
      // fetch data from Riot API and extract PUUID from response

      const response = await fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`);
      const data = await response.json();
      const puuid = data.puuid;

      return new Response(JSON.stringify({ puuid }))
   }
   catch (error) {
      return new Response('Error fetching PUUID', { status: 500 });
   }
}