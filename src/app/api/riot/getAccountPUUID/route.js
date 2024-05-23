/* 
Created By Himay on 5/21/2024
Lasted Edited By: Himay 5/21/2024
File Level: Junior Developer
Overview: This file is the route for the getAccountPUUID API. This file calls the Riot API to get the account PUUID of a player.
The values required are the gameName and tagLine of the player. The API key is also required.

Link to the API: https://developer.riotgames.com/apis#account-v1/GET_getByRiotId
*/

export async function GET(req) {
   const { searchParams } = new URL(req.url);
   let gameName = searchParams.get('gameName');
   let tagLine = searchParams.get('tagLine');

   const apiKey = process.env.RIOT_API_KEY;

   if (!gameName || !tagLine) {
      return new Response(JSON.stringify({ error: 'Game Name and Tag Line are required' }), {
         status: 400,
         headers: { 'Content-Type': 'application/json' },
      });
   }

   try {
      console.log(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`)
      const response = await fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`);

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