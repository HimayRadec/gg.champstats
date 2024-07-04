import Image from 'next/image'
import ProfileSearchBar from '@/components/SummonerProfile/ProfileSearchBar'

import { MdFeedback } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";


import "@/styles/MatchSummary.css"

export default function SummonerProfileHeader() {

    return (
        <nav className="header">

            <div className="">
                <Image src="/icon.png" alt="ChampStats.gg" width={64} height={64} />
            </div>

            <ProfileSearchBar />

            <div className="header-right ">
                <div className="header-icon">
                    <FaGear />
                </div>
                <div className="header-icon">
                    <MdFeedback size={22} />
                </div>
                <div className="header-icon">
                    <FaBell />
                </div>
                <a className="header-login-button">Log In</a>
            </div>
        </nav>

    );
};

let matchData = {
    "metadata": {
        "dataVersion": "2",
        "matchId": "NA1_4973685865",
        "participants": [
            "Us0xnPldtOZOsBcW0d2ggF0xIqkOfKOGtANhJN50xZXvSWzuK3ZbEO9JhjSQjScBv7f6VSyvtG_bkg",
            "RMtOeXgZlDoPSR4sDWPw4ZlSv4sEV4dz8bgIgPvRMdRsXXuSSWlY8mh8A0_b71FFJ_wJVp3EFRl17g",
            "QZttkdiJbOlQft9DNpRivSmC6gC9GRfBfPvSjf0g3RzWR2hXnenIUS8yKmzjeWOI-o7YelclG7REyw",
            "l2zmX55AsUpsD8LFVF3WyINBnw2z7hB9UnJcF5GVKQcMrNSooiduLqV1_TsFXxmvPyT_9Hl5Vb6XqA",
            "AtdAQRZZyarGWHEEB_qj48yFuvQT4n54ES1-lNK-SV-N__9xahorzDyJq3qWVTRt7FdDxXyho8x6Gw",
            "8cfUqQN-q92nI9pa1UwqI2tsu-W1pNzr8DUsaZ3syY2ODyqQZP3x-jyCsxOSWOVX8wd9w8K7jhssCg",
            "2l7IBSmYC3DvkF4bRtY5laQcq1ZJqP7QAMuFuS3irRIUIRRTPff0PVeiXZQfzjhJXOjl3AWdP1iWxA",
            "J5iG5MChNaEnDsjzRWHh0CoRvk_rZfDLk9YFwhnHCi3g3oFFxLtsu_OmE9CIfQEd1oiXpr2rJOIVdg",
            "QZRHHvlz7xr73HJZ3NzTJGfg4sk2X8Nacum9IXNuzF9LgMe_oirHvDhjGA11CR2dZP_WAXQbFdjKNg",
            "EQXeMVGodF-6FgA8TpI8ueZkIIiGSx0RglZFK1VC2Z5aXU0I46KxEQU8AME0M-UJMatLFqsKA8gZOg"
        ]
    },
    "info": {
        "endOfGameResult": "GameComplete",
        "gameCreation": 1713119953080,
        "gameDuration": 1545,
        "gameEndTimestamp": 1713121524423,
        "gameId": 4973685865,
        "gameMode": "CLASSIC",
        "gameName": "teambuilder-match-4973685865",
        "gameStartTimestamp": 1713119978965,
        "gameType": "MATCHED_GAME",
        "gameVersion": "14.7.571.9528",
        "mapId": 11,
        "participants": [
            {
                "allInPings": 0,
                "assistMePings": 1,
                "assists": 1,
                "baronKills": 0,
                "basicPings": 0,
                "bountyLevel": 0,
                "challenges": {
                    "12AssistStreakCount": 0,
                    "abilityUses": 188,
                    "acesBefore15Minutes": 0,
                    "alliedJungleMonsterKills": 0,
                    "baronTakedowns": 0,
                    "blastConeOppositeOpponentCount": 0,
                    "bountyGold": 0,
                    "buffsStolen": 0,
                    "completeSupportQuestInTime": 0,
                    "controlWardsPlaced": 0,
                    "damagePerMinute": 414.8239078031127,
                    "damageTakenOnTeamPercentage": 0.25871822106986075,
                    "dancedWithRiftHerald": 0,
                    "deathsByEnemyChamps": 11,
                    "dodgeSkillShotsSmallWindow": 0,
                    "doubleAces": 0,
                    "dragonTakedowns": 0,
                    "earlyLaningPhaseGoldExpAdvantage": 0,
                    "effectiveHealAndShielding": 0,
                    "elderDragonKillsWithOpposingSoul": 0,
                    "elderDragonMultikills": 0,
                    "enemyChampionImmobilizations": 0,
                    "enemyJungleMonsterKills": 0,
                    "epicMonsterKillsNearEnemyJungler": 0,
                    "epicMonsterKillsWithin30SecondsOfSpawn": 0,
                    "epicMonsterSteals": 0,
                    "epicMonsterStolenWithoutSmite": 0,
                    "firstTurretKilled": 0,
                    "flawlessAces": 0,
                    "fullTeamTakedown": 0,
                    "gameLength": 1545.6531667,
                    "getTakedownsInAllLanesEarlyJungleAsLaner": 0,
                    "goldPerMinute": 279.1782234040339,
                    "hadOpenNexus": 0,
                    "immobilizeAndKillWithAlly": 0,
                    "initialBuffCount": 0,
                    "initialCrabCount": 0,
                    "jungleCsBefore10Minutes": 0,
                    "junglerTakedownsNearDamagedEpicMonster": 0,
                    "kTurretsDestroyedBeforePlatesFall": 0,
                    "kda": 0.18181818181818182,
                    "killAfterHiddenWithAlly": 0,
                    "killParticipation": 0.11764705882352941,
                    "killedChampTookFullTeamDamageSurvived": 0,
                    "killingSprees": 0,
                    "killsNearEnemyTurret": 0,
                    "killsOnOtherLanesEarlyJungleAsLaner": 0,
                    "killsOnRecentlyHealedByAramPack": 0,
                    "killsUnderOwnTurret": 0,
                    "killsWithHelpFromEpicMonster": 0,
                    "knockEnemyIntoTeamAndKill": 0,
                    "landSkillShotsEarlyGame": 0,
                    "laneMinionsFirst10Minutes": 36,
                    "laningPhaseGoldExpAdvantage": 0,
                    "legendaryCount": 0,
                    "legendaryItemUsed": [
                        6662,
                        3110
                    ],
                    "lostAnInhibitor": 0,
                    "maxCsAdvantageOnLaneOpponent": 0,
                    "maxKillDeficit": 0,
                    "maxLevelLeadLaneOpponent": 0,
                    "mejaisFullStackInTime": 0,
                    "moreEnemyJungleThanOpponent": 0,
                    "multiKillOneSpell": 0,
                    "multiTurretRiftHeraldCount": 0,
                    "multikills": 0,
                    "multikillsAfterAggressiveFlash": 0,
                    "outerTurretExecutesBefore10Minutes": 0,
                    "outnumberedKills": 1,
                    "outnumberedNexusKill": 0,
                    "perfectDragonSoulsTaken": 0,
                    "perfectGame": 0,
                    "pickKillWithAlly": 1,
                    "playedChampSelectPosition": 1,
                    "poroExplosions": 0,
                    "quickCleanse": 0,
                    "quickFirstTurret": 0,
                    "quickSoloKills": 0,
                    "riftHeraldTakedowns": 0,
                    "saveAllyFromDeath": 0,
                    "scuttleCrabKills": 0,
                    "skillshotsDodged": 2,
                    "skillshotsHit": 0,
                    "snowballsHit": 0,
                    "soloBaronKills": 0,
                    "soloKills": 1,
                    "stealthWardsPlaced": 7,
                    "survivedSingleDigitHpCount": 0,
                    "survivedThreeImmobilizesInFight": 2,
                    "takedownOnFirstTurret": 0,
                    "takedowns": 2,
                    "takedownsAfterGainingLevelAdvantage": 0,
                    "takedownsBeforeJungleMinionSpawn": 0,
                    "takedownsFirstXMinutes": 0,
                    "takedownsInAlcove": 0,
                    "takedownsInEnemyFountain": 0,
                    "teamBaronKills": 0,
                    "teamDamagePercentage": 0.1293333576177343,
                    "teamElderDragonKills": 0,
                    "teamRiftHeraldKills": 0,
                    "tookLargeDamageSurvived": 0,
                    "turretPlatesTaken": 0,
                    "turretTakedowns": 0,
                    "turretsTakenWithRiftHerald": 0,
                    "twentyMinionsIn3SecondsCount": 0,
                    "twoWardsOneSweeperCount": 0,
                    "unseenRecalls": 0,
                    "visionScoreAdvantageLaneOpponent": -0.6185293793678284,
                    "visionScorePerMinute": 0.3929915950063867,
                    "wardTakedowns": 1,
                    "wardTakedownsBefore20M": 1,
                    "wardsGuarded": 0
                },
                "champExperience": 11045,
                "champLevel": 13,
                "championId": 75,
                "championName": "Nasus",
                "championTransform": 0,
                "commandPings": 4,
                "consumablesPurchased": 1,
                "damageDealtToBuildings": 1716,
                "damageDealtToObjectives": 1716,
                "damageDealtToTurrets": 1716,
                "damageSelfMitigated": 25846,
                "dangerPings": 0,
                "deaths": 11,
                "detectorWardsPlaced": 0,
                "doubleKills": 0,
                "dragonKills": 0,
                "eligibleForProgression": true,
                "enemyMissingPings": 1,
                "enemyVisionPings": 0,
                "firstBloodAssist": false,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "getBackPings": 2,
                "goldEarned": 7191,
                "goldSpent": 6900,
                "holdPings": 0,
                "individualPosition": "TOP",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 0,
                "inhibitorsLost": 2,
                "item0": 6662,
                "item1": 3070,
                "item2": 3110,
                "item3": 0,
                "item4": 3158,
                "item5": 0,
                "item6": 3340,
                "itemsPurchased": 19,
                "killingSprees": 0,
                "kills": 1,
                "lane": "TOP",
                "largestCriticalStrike": 0,
                "largestKillingSpree": 0,
                "largestMultiKill": 1,
                "longestTimeSpentLiving": 309,
                "magicDamageDealt": 11660,
                "magicDamageDealtToChampions": 3848,
                "magicDamageTaken": 3935,
                "missions": {
                    "PlayerScore0": 0,
                    "PlayerScore1": 0,
                    "PlayerScore10": 0,
                    "PlayerScore11": 0,
                    "PlayerScore2": 0,
                    "PlayerScore3": 0,
                    "PlayerScore4": 0,
                    "PlayerScore5": 0,
                    "PlayerScore6": 0,
                    "PlayerScore7": 0,
                    "PlayerScore8": 0,
                    "PlayerScore9": 0
                },
                "needVisionPings": 0,
                "neutralMinionsKilled": 0,
                "nexusKills": 0,
                "nexusLost": 1,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "onMyWayPings": 3,
                "participantId": 1,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5001,
                        "flex": 5001,
                        "offense": 5007
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8021,
                                    "var1": 942,
                                    "var2": 707,
                                    "var3": 0
                                },
                                {
                                    "perk": 9111,
                                    "var1": 239,
                                    "var2": 40,
                                    "var3": 0
                                },
                                {
                                    "perk": 9103,
                                    "var1": 0,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8299,
                                    "var1": 543,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 8134,
                                    "var1": 8,
                                    "var2": 1,
                                    "var3": 0
                                },
                                {
                                    "perk": 8120,
                                    "var1": 1,
                                    "var2": 6,
                                    "var3": 4
                                }
                            ],
                            "style": 8100
                        }
                    ]
                },
                "physicalDamageDealt": 71168,
                "physicalDamageDealtToChampions": 6838,
                "physicalDamageTaken": 21974,
                "placement": 0,
                "playerAugment1": 0,
                "playerAugment2": 0,
                "playerAugment3": 0,
                "playerAugment4": 0,
                "playerSubteamId": 0,
                "profileIcon": 6555,
                "pushPings": 0,
                "puuid": "Us0xnPldtOZOsBcW0d2ggF0xIqkOfKOGtANhJN50xZXvSWzuK3ZbEO9JhjSQjScBv7f6VSyvtG_bkg",
                "quadraKills": 0,
                "riotIdGameName": "Radec Himay",
                "riotIdTagline": "NA1",
                "role": "SOLO",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 149,
                "spell2Casts": 18,
                "spell3Casts": 17,
                "spell4Casts": 4,
                "subteamPlacement": 0,
                "summoner1Casts": 3,
                "summoner1Id": 12,
                "summoner2Casts": 5,
                "summoner2Id": 6,
                "summonerId": "2BWo6vY8Z0Be1m0diXQxAuE3BlIEl5cfrRVMLKaDnO1AQ7k",
                "summonerLevel": 450,
                "summonerName": "Radec Himay",
                "teamEarlySurrendered": false,
                "teamId": 100,
                "teamPosition": "TOP",
                "timeCCingOthers": 15,
                "timePlayed": 1545,
                "totalAllyJungleMinionsKilled": 0,
                "totalDamageDealt": 82894,
                "totalDamageDealtToChampions": 10686,
                "totalDamageShieldedOnTeammates": 0,
                "totalDamageTaken": 26406,
                "totalEnemyJungleMinionsKilled": 0,
                "totalHeal": 4745,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 139,
                "totalTimeCCDealt": 1371,
                "totalTimeSpentDead": 181,
                "totalUnitsHealed": 1,
                "tripleKills": 0,
                "trueDamageDealt": 66,
                "trueDamageDealtToChampions": 0,
                "trueDamageTaken": 496,
                "turretKills": 0,
                "turretTakedowns": 0,
                "turretsLost": 10,
                "unrealKills": 0,
                "visionClearedPings": 0,
                "visionScore": 10,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 1,
                "wardsPlaced": 7,
                "win": false
            }
        ],
        "platformId": "NA1",
        "queueId": 440,
        "teams": [
            {
                "bans": [
                    {
                        "championId": 33,
                        "pickTurn": 1
                    },
                    {
                        "championId": 39,
                        "pickTurn": 2
                    },
                    {
                        "championId": -1,
                        "pickTurn": 3
                    },
                    {
                        "championId": 50,
                        "pickTurn": 4
                    },
                    {
                        "championId": -1,
                        "pickTurn": 5
                    }
                ],
                "objectives": {
                    "baron": {
                        "first": false,
                        "kills": 0
                    },
                    "champion": {
                        "first": false,
                        "kills": 17
                    },
                    "dragon": {
                        "first": false,
                        "kills": 1
                    },
                    "horde": {
                        "first": true,
                        "kills": 1
                    },
                    "inhibitor": {
                        "first": false,
                        "kills": 0
                    },
                    "riftHerald": {
                        "first": false,
                        "kills": 0
                    },
                    "tower": {
                        "first": false,
                        "kills": 1
                    }
                },
                "teamId": 100,
                "win": false
            },
            {
                "bans": [
                    {
                        "championId": 103,
                        "pickTurn": 6
                    },
                    {
                        "championId": 53,
                        "pickTurn": 7
                    },
                    {
                        "championId": 360,
                        "pickTurn": 8
                    },
                    {
                        "championId": 86,
                        "pickTurn": 9
                    },
                    {
                        "championId": 17,
                        "pickTurn": 10
                    }
                ],
                "objectives": {
                    "baron": {
                        "first": true,
                        "kills": 1
                    },
                    "champion": {
                        "first": true,
                        "kills": 34
                    },
                    "dragon": {
                        "first": true,
                        "kills": 3
                    },
                    "horde": {
                        "first": false,
                        "kills": 2
                    },
                    "inhibitor": {
                        "first": true,
                        "kills": 2
                    },
                    "riftHerald": {
                        "first": true,
                        "kills": 1
                    },
                    "tower": {
                        "first": true,
                        "kills": 10
                    }
                },
                "teamId": 200,
                "win": true
            }
        ],
        "tournamentCode": ""
    }
}
