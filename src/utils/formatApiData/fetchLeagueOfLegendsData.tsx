// utils/fetchRiotData.ts
const LeagueAPIRoute = `/api/riot/LeagueOfLegends/`

export async function fetchPUUID(gameName: string, tagLine: string): Promise<any> {
   try {
      const res = await fetch(`${LeagueAPIRoute}getAccountByRiotID?gameName=${gameName}&tagLine=${tagLine}`);

      if (res.status === 404) {
         const errorData = await res.json();
         throw new Error(`Invalid game name or tag line: ${errorData.error}`);
      }


      const data = await res.json();
      return data.puuid;
   }
   catch (error: any) {
      console.error('Error fetching data:', error);
      throw error;
   }
}

export async function fetchSummonerProfile(puuid: string): Promise<any> {
   try {
      const res = await fetch(`${LeagueAPIRoute}getSummonerByPUUID?puuid=${puuid}`);

      if (res.status === 404) {
         const errorData = await res.json();
         throw new Error(`Invalid PUUID: ${errorData.error}`);
      }

      const data = await res.json();
      return data;
   }
   catch (error: any) {
      console.error('Error fetching data:', error);
      throw error;
   }
}
