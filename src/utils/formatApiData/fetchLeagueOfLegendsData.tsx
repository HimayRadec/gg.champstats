import { AccountInformation } from "@/types/LeagueOfLegends";

type RiotAPIResponse = {
   data?: any;
   status: number;
   error?: string;
};



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
      return data.puuid;
   }
   catch (error: any) {
      console.error('Error fetching data:', error);
      throw error;
   }
}

export async function fetchAccountByRiotID(gameName: string, tagLine: string): Promise<AccountInformation> {
   try {
      const response = await fetch(`${LeagueAPIRoute}getAccountByRiotID?gameName=${gameName}&tagLine=${tagLine}`);

      const fetchedData = await response.json();
      return fetchedData.data;
   }
   catch (error: any) {
      console.error('Error fetching account by Riot ID data:', error);
      throw error;
   }
}
