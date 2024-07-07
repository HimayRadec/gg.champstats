/*
Created By: Himay on 7/06/2024
Lasted Edited By: Himay 7/07/2024
File Level: Junior Developer
Overview: This file is the route for the Summoner Page. This file is called when a user searches for a summoner.
Two values are reuqired, the gameName and tagLine of the player.
Example URL: champstats.gg/lol/radec%20himay-NA1
*/


// https://developer.riotgames.com/apis#summoner-v4/GET_getByPUUID
export type SummonerProfile = {
   id: string;
   accountId: string;
   puuid: string;
   profileIconId: number;
   revisionDate: number;
   summonerLevel: number;
}

export type AccountInformation = {
   puuid: string;
   gameName: string;
   tagLine: string;
}