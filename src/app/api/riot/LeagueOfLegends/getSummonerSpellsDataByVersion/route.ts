/* 
Created By: Himay on 7/11/2024
Lasted Edited By: Himay 7/11/2024
File Level: Junior Developer
Overview: Gets summoner spells data from the ddragon API using the version number.
Example URL: /api/riot/LeagueOfLegends/getSummonerSpellsDataByVersion?Version=14.13.1 

Link to the API: https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/summoner.json
*/

import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {

   const version = request.nextUrl.searchParams.get('Version');
   if (version == 'undefined') return new Response(JSON.stringify({ error: 'Missing version number' }), { status: 404 });

   try {
      const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}.1/data/en_US/summoner.json`);
      const data = await response.json();

      return new Response(JSON.stringify(
         { data }),
         { status: 200 }
      );
   }
   catch (error) {
      console.error('Error fetching summoner spells data:', error);

      return new Response(JSON.stringify(
         { error: 'Invalid API URL' }),
         { status: 500 }
      );
   }
}