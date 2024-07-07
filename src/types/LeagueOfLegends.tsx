/*
Created By: Himay on 7/06/2024
Lasted Edited By: Himay 7/03/2024
File Level: Junior Developer
Overview: This file is the route for the Summoner Page. This file is called when a user searches for a summoner.
Two values are reuqired, the gameName and tagLine of the player.
Example URL: champstats.gg/lol/radec%20himay-NA1
*/


export type SummonerProfile = {
   summonerName: string;
   summonerLevel: number;
   summonerIconId: number;


}

export type AccountInformation = {
   puuid: string;
   gameName: string;
   tagLine: string;
}