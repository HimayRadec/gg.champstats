import { AccountInformation, SummonerProfile } from "@/types/LeagueOfLegends";

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


// Fetches the SummonerProfile data using the PUUID
export async function fetchSummonerProfile(puuid: string): Promise<SummonerProfile> {
   try {
      const response = await fetch(`${LeagueAPIRoute}getSummonerByPUUID?puuid=${puuid}`);

      // If the PUUID is invalid
      if (response.status === 404) {
         const errorData = await response.json();
         throw new Error(`Invalid PUUID: ${errorData.error}`);
      }

      const fetchedData = await response.json();
      return fetchedData.data;
   }
   catch (error: any) {
      console.error('Error fetching data:', error);
      throw error;
   }
}

// Fetches the AccountInformation using the game name and tag line
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
