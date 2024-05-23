/*
Created By: Himay on 5/22/2024
Last Edited By: Himay on 5/22/2024
Purpose: Types for MatchSummary component
All of this data is fetched from the backend api and is used to display the match summary
This data is used to display the match summary of a single match
*/

export type SummonerInfo = {
   queueType: string;
   timeAgo: string;
   win: boolean;
   gameDurationSeconds: number;

   kills: number;
   deaths: number;
   assists: number;
   KDA: number;
   cs: number;
   csPerMin: number;
   visionScore: number;
   items: string[];
   championName: string;
   summonerSpells: string[];
   primaryRune: string;
   primaryRuneTree: string;
   secondaryRuneId: string;
   secondaryRuneTree: string;
};

export type ParticipantInfo = {
   championName: string;
   summonerSpells: string[];
   primaryRune: string;
   primaryRuneTree: string;
   secondaryRuneId: string;
   secondaryRuneTree: string;
   summonerName: string;
   currentRankTier: string;
   currentRankDivision: string;

   kills: number;
   deaths: number;
   assists: number;

   damageDealt: number;
   damageTaken: number;

   goldEarned: number;

   cs: number;

   visionScore: number;

   items: string[];
};

export type TeamInfo = {
   summoners: SummonerInfo[];
   win: boolean;
};

export type MatchData = {
   summonerInfo: SummonerInfo;
   redSide: TeamInfo;
   blueSide: TeamInfo;
};