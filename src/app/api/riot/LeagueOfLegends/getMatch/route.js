// app/api/match/route.js


export async function GET(req) {
   const { searchParams } = new URL(req.url);
   let matchId = searchParams.get('matchId');
   const apiKey = process.env.RIOT_API_KEY; // Ensure you have this environment variable set up

   if (!matchId) {
      return new Response(JSON.stringify({ error: 'Match ID is required' }), {
         status: 400,
         headers: { 'Content-Type': 'application/json' },
      });
   }

   try {
      console.log(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`)
      const response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`);

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
