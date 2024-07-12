import { AccountInformation, MatchInformation, SummonerProfile, SummonerSpell, SummonerSpells } from "@/types/LeagueOfLegends";

const LeagueAPIRoute = `/api/riot/LeagueOfLegends/`


// Fetches the PUUID using the game name and tag line
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


// Fetches the match IDs of a player using their PUUID
export async function fetchMatchIdsByPUUID(puuid: string): Promise<string[]> {
   try {
      const response = await fetch(`${LeagueAPIRoute}getMatchesIdsByPUUID?puuid=${puuid}`);

      const fetchedData = await response.json();
      return fetchedData.data;
   }
   catch (error: any) {
      console.error('Error fetching match IDs by PUUID:', error);
      throw error;
   }
}

// Fetches the match data using the match ID
export async function fetchMatchByMatchID(matchId: string): Promise<MatchInformation> {
   try {
      const response = await fetch(`${LeagueAPIRoute}getMatchByMatchID?matchId=${matchId}`);

      if (response.status === 404) {
         const errorData = await response.json();
         throw new Error(`Invalid match ID: ${errorData.error}`);
      }

      const fetchedData = await response.json();
      return fetchedData.data;
   }
   catch (error: any) {
      console.error('Error fetching match data:', error);
      throw error;
   }
}

export async function fetchSummonerSpellsData(gameVersion: string): Promise<SummonerSpells> {
   // format the version number to only include the first two numbers 
   let version = gameVersion.split('.').slice(0, 2).join('.');
   console.log(`fetchSummmoerSpellsData: Fetching spells for version: ${version}`)

   try {
      const response = await fetch(`${LeagueAPIRoute}getSummonerSpellsData?Version=${version}`);
      const fetchedData = await response.json();

      // console.log('fetchSummonerSpellsData: fetchedData:', JSON.stringify(fetchedData));
      return fetchedData.data;
   }
   catch (error: any) {
      console.error('Error fetching summoner spell icon:', error);
      throw error;
   }
}