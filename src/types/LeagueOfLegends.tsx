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

export type MatchInformation = {
   metaData: {
      dataVersion: string;
      matchId: string;
      participants: string[];
   }
   info: {
      endOfGameResult: string;
      gameCreation: number;
      gameDuration: number;
      gameEndTimestamp: number;
      gameId: number;
      gameMode: string;
      gameName: string;
      gameStartTimestamp: number;
      gameType: string;
      gameVersion: string;
      mapId: number;
      participants: ParticipantInformation[];
      platformId: string;
      queueId: number;
      teams: Team[];
      tournamentCode: string;
   }
}

export type ParticipantInformation = {
   allInPings: number;
   assistMePings: number;
   assists: number;
   baronKills: number;
   basicPings: number;
   bountyLevel: number;
   challenges: {
      //TODO: Create a type for challenges
   }
   championExperience: number;
   champLevel: number;
   championId: number;
   championName: string;
   championTransform: number;
   commandPings: number;
   consumablesPurchased: number;
   damageDealtToBuildings: number;
   damageDealtToObjectives: number;
   damageDealtToTurrets: number;
   damageSelfMitigated: number;
   dangerousPings: number;
   deaths: number;
   detectorWardsPlaced: number;
   doubleKills: number;
   dragonKills: number;
   eligibleForProgression: boolean;
   enemyMissingPings: number;
   enemyVisionPings: number;
   firstBloodAssist: boolean;
   firstBloodKill: boolean;
   firstTowerAssist: boolean;
   firstTowerKill: boolean;
   gameEndedInEarlySurrender: boolean;
   gameEndedInSurrender: boolean;
   getBackPings: number;
   goldEarned: number;
   goldSpent: number;
   holdPings: number;
   individualPosition: string;
   inhibitorKills: number;
   inhibitorTakedowns: number;
   inhibitorsLost: number;
   item0: number;
   item1: number;
   item2: number;
   item3: number;
   item4: number;
   item5: number;
   item6: number;
   itemsPurchased: number;
   killingSprees: number;
   kills: number;
   lane: string;
   largestCriticalStrike: number;
   largestKillingSpree: number;
   largestMultiKill: number;
   longestTimeSpentLiving: number;
   magicDamageDealt: number;
   magicDamageDealtToChampions: number;
   magicDamageTaken: number;
   missions: string[]; //TODO: Create a type for missions
   needVisionPings: number;
   neutralMinionsKilled: number;
   nexusKills: number;
   nexusLost: number;
   nexusTakedowns: number;
   objectivesStolen: number;
   objectivesStolenAssists: number;
   onMyWayPings: number;
   participantId: number;
   pentaKills: number;
   perks: { //TODO: Create a type for perks
      statPerks: {
         defense: number;
         flex: number;
         offense: number;
      }
      styles: {
         description: string;
         selections: {
            perk: number;
            var1: number;
            var2: number;
            var3: number;
         }[]
         style: number;
      }[]
   }
   physicalDamageDealt: number;
   physicalDamageDealtToChampions: number;
   physicalDamageTaken: number;
   placement: number;
   playerAugment1: number;
   playerAugment2: number;
   playerAugment3: number;
   playerAugment4: number;
   playerSubteamId: number;
   profileIcon: number;
   pushPings: number;
   puuid: string;
   quadraKills: number;
   riotIdGameName: string;
   riotIdTagLine: string;
   role: string;
   sightWardsBoughtInGame: number;
   spell1Casts: number;
   spell2Casts: number;
   spell3Casts: number;
   spell4Casts: number;
   summoner1Casts: number;
   summoner1Id: number;
   summoner2Casts: number;
   summoner2Id: number;
   summonerId: string;
   summonerLevel: number;
   summonerName: string;
   teamEarlySurrendered: boolean;
   teamId: number;
   teamPosition: string;
   timeCCingOthers: number;
   timePlayed: number;
   totalAllyJungleMinionsKilled: number;
   totalDamageDealt: number;
   totalDamageDealtToChampions: number;
   totalDamageShieldedOnTeammates: number;
   totalDamageTaken: number;
   totalEnemyJungleMinionsKilled: number;
   totalHeal: number;
   totalHealsOnTeammates: number;
   totalMinionsKilled: number;
   totalTimeCCDealt: number;
   totalTimeSpentDead: number;
   totalUnitsHealed: number;
   tripleKills: number;
   trueDamageDealt: number;
   trueDamageDealtToChampions: number;
   trueDamageTaken: number;
   turretKills: number;
   turretTakedowns: number;
   turretsLost: number;
   unrealKills: number;
   visionClearedPings: number;
   visionScore: number;
   visionWardsBoughtInGame: number;
   wardsKilled: number;
   wardsPlaced: number;
   win: boolean;
}

export type Ban = {
   championId: number;
   pickTurn: number;
}

export type ObjectiveStat = {
   first: boolean;
   kills: number;
}

export type Team = {
   bans: Ban[];
   objectives: {
      baron: ObjectiveStat;
      champion: ObjectiveStat;
      dragon: ObjectiveStat;
      inhibitor: ObjectiveStat;
      riftHerald: ObjectiveStat;
      tower: ObjectiveStat;
   }
   teamId: number;
   win: boolean;
}

export type SummonerSpell = {
   id: string;
   name: string;
   description: string;
   tooltip: string;
   maxrank: number;
   cooldown: number[];
   cooldownBurn: string;
   cost: number[];
   costBurn: string;
   datavalues: Record<string, unknown>;
   effect: Array<null | number[]>;
   effectBurn: Array<null | string>;
   vars: unknown[];
   key: string;
   summonerLevel: number;
   modes: string[];
   costType: string;
   maxammo: string;
   range: number[];
   rangeBurn: string;
   image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
   };
   resource: string;
}

export type SummonerSpells = {
   type: string;
   version: string;
   data: Record<string, SummonerSpell>;
}

export type Rune = {
   id: number;
   key: string;
   icon: string;
   name: string;
   shortDesc: string;
   longDesc: string;
};

export type RuneSlot = {
   runes: Rune[];
};

export type Perk = {
   id: number;
   key: string;
   icon: string;
   name: string;
   slots: RuneSlot[];
};

export type PerkData = Perk[];
