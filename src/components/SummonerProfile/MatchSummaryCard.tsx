/*
Created By: Himay on 5/15/2024?
Last Edited By: Himay on 5/17/2024
Overview: This component is a card that displays a summary of a match that the summoner has played. 
It displays information such as the game duration, the summoner's KDA, the summoner's champion, the summoner's items, and the summoner's teammates. 
The card can be expanded to display more detailed information about the match, such as the summoner's damage dealt, gold earned, CS, wards placed, and items purchased. 
The card also displays the summoner's rank and LP, as well as the summoner's performance in the match, such as the summoner's KDA, CS, and vision score. 
The card also displays the summoner's teammates and their champions. The card is color-coded to indicate whether the summoner won or lost the match.

Child Components:
- ChampionIcon: Displays the icon of a champion.
- SummonerSpellIcon: Displays the icon of a summoner spell.
- PrimaryRuneIcon: Displays the icon of a primary rune.
- SecondaryRuneIcon: Displays the icon of a secondary rune.
- ItemIcon: Displays the icon of an item.
- ParticipantChampionIconAndSummonerName: Displays the icon of a champion and the summoner's name.
- ExpandedParticipantInfo: Displays detailed information about a participant in the match when the card is expanded.
- ExpandedTeamOverview: Displays detailed information about a team in the match.

Parent Component: 
- MatchSummaryCard: Displays a summary of a match that the summoner has played.

*/

//TOOD: Add Tooltip for summoner spells and runes https://mui.com/material-ui/react-tooltip/

'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { SummonerInfo } from '@/types/MatchSummary';
import { fetchMatchByMatchID, fetchSummonerSpellsData, fetchRunesData } from '@/utils/formatApiData/fetchLeagueOfLegendsData';
import { MatchInformation, SummonerSpells, SummonerSpell, PerkData, Perk, RuneSlot, Rune } from '@/types/LeagueOfLegends';
import { json } from 'stream/consumers';

const WIN_BACKGROUND_COLOR = '#12264a';
const LOSS_BACKGROUND_COLOR = '#5e1515';

function ChampionIcon(props: { championName: string }) {
   const { championName } = props;
   return (
      <div className='ChampionIcon relative h-full w-full'>
         <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/${championName}.png`}
            alt='profile-icon'
            sizes='100%'
            fill
         />
      </div>
   );
}

// Fetches the summoner spell icon using the summoner spell name
function SummonerSpellIcon(props: { summonerSpell: SummonerSpell }) {
   const { summonerSpell: summonerSpellData } = props;
   if (!summonerSpellData) return null;

   return (
      <div
         className='SummonerSpellIcon relative h-full w-full'
      >
         <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/${summonerSpellData.image.full}`}
            // src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/SummonerFlash.png`}
            alt={`Summoner ${summonerSpellData.name}`}
            sizes='100%'
            priority={false}
            fill
         />
      </div>
   );
}

function PrimaryRuneIcon(props: { rune: Rune }) {
   const { rune } = props;
   if (!rune) return null;

   return (
      <div className='PrimaryRuneIcon relative h-full w-full'>
         <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
            alt='profile-icon'
            sizes='100%'
            priority={false}
            fill
         />
      </div>
   );
}

function SecondaryPerkIcon(props: { perk: Perk }) {
   const { perk } = props;
   if (!perk) return null;

   return (
      <div className='PrimaryRuneIcon relative h-full w-full'>
         <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/${perk.icon}`}
            alt='profile-icon'
            sizes='100%'
            priority={false}
            fill
         />
      </div>
   );
}

function ItemIcon(props: { itemId: string }) {
   const { itemId } = props;

   if (itemId === '0') {
      return (
         <div className='ItemIcon bg-white bg-opacity-5 h-full w-full'>
         </div>
      );
   }
   else {
      return (
         <div className='item-icon relative h-full w-full'>
            <Image
               src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/${itemId}.png`}
               alt='profile-icon'
               sizes='100%'
               fill
            />
         </div>
      );
   }
}

function ParticipantChampionIconAndSummonerName(props: { championName: string, summonerName: string }) {
   const { championName, summonerName } = props;
   return (
      <div className='ParticipantChampionIconAndSummonerName flex items-center gap-x-1 w-fit'>
         <div className='relative w-4 h-4'>
            <ChampionIcon championName={championName} />
         </div>
         <div>
            {summonerName}
         </div>
      </div>
   );
}

function ExpandedParticipantInfo(props: { participantStats: any, highestDamageInGame: number }) {

   const { participantStats, highestDamageInGame } = props;
   function calculateDamagePercentage(highestDamageInGame: number): string {
      const percentage = (participantStats.totalDamageDealtToChampions / highestDamageInGame) * 100;
      const roundedPercentage = Math.round(percentage);
      return `${roundedPercentage}%`;
   }


   return (
      <div className='ExpandedParticipantInfo grid grid-cols-8 h-[36px]'>

         <div className='LoadoutIconsColumn flex col-span-2'>
            <div className='grid grid-cols-4 grid-rows-2 w-[76px] gap-1'>
               <div className='col-span-2 row-span-2'>
                  <ChampionIcon championName={participantStats.championName} />
               </div>

               {/* 
               TODO:
               - implement a function that maps the summoner spell names to their respective icons
               - implement a function that maps the rune names to their respective icons
               */}
               <SummonerSpellIcon summonerSpell='SummonerExhaust' />
               <PrimaryRuneIcon runeName='ArcaneComet' runeTreeName='Sorcery' />
               <SummonerSpellIcon summonerSpell='SummonerFlash' />
               <SecondaryPerkIcon runeTreeId='7200' runeTreeName='Domination' />
            </div>

            <div className='ParticipantNameAndRank flex flex-col ml-1'>
               <p className='text-xs font-bold'>Summoner Name</p>
               <div className='flex'>
                  <div className='RankEmblemContainer h-full w-1/4 relative'>
                     <Image
                        src="/ranked_icons/Rank=Emerald.png"
                        alt='ranked icon'
                        fill
                        objectFit="contain"
                     />
                  </div>
                  <p className='text-xs'>E3</p>
               </div>
            </div>

         </div>

         <div className='KDAColumn text-center'>
            {`${participantStats.kills} / ${participantStats.deaths} / ${participantStats.assists}`}
         </div>

         <div className='DamageToChampionsColumn flex flex-col items-center'>
            <p className='DamageToChampionsValue text-center'>{participantStats.totalDamageDealtToChampions}</p>
            <div className='DamageToChampionsBar w-4/5 h-2 bg-white bg-opacity-10 relative'>
               <div
                  className={`h-full bg-white bg-opacity-20 absolute`}
                  style={{ width: `${calculateDamagePercentage(highestDamageInGame)}` }}
               >
               </div>
            </div>
         </div>

         <div className="GoldColumn text-center">
            {participantStats.goldEarned}
         </div>

         <div className="CSColumn text-center">
            {participantStats.totalMinionsKilled}
         </div>

         <div className="WardsColumn text-center">
            {participantStats.visionScore}
         </div>

         <div className='ItemsIconsColumn flex justify-center'>
            <div className='ItemsSection grid grid-cols-4 grid-rows-2 gap-1 w-[76px]'>
               <ItemIcon itemId={participantStats.item0} />
               <ItemIcon itemId={participantStats.item1} />
               <ItemIcon itemId={participantStats.item2} />

               {/* Trinket */}
               <ItemIcon itemId={participantStats.item6} />

               <ItemIcon itemId={participantStats.item3} />
               <ItemIcon itemId={participantStats.item4} />
               <ItemIcon itemId={participantStats.item5} />
            </div>
         </div>

      </div>
   )

}
function ExpandedTeamOverview(props: { participantsData: [any, any, any, any, any], highestDamageInGame: number }) {
   const { participantsData, highestDamageInGame } = props;

   let backgroundColor = (participantsData[0].win ? WIN_BACKGROUND_COLOR : LOSS_BACKGROUND_COLOR);
   let textColor = (participantsData[0].win ? '#4287f5' : '#f54242');

   return (
      <div className='ExpandedTeamOverview' style={{ backgroundColor: backgroundColor }}>

         <div className='TeamOverviewHeader grid grid-cols-8 bg-black bg-opacity-75 p-1'>
            <div className='col-span-2 flex gap-1 items-end'>
               <div className='text-sm ' style={{ color: textColor }}>{`${participantsData[0].win ? 'Victory' : 'Defeat'}`}</div>
               <span className='text-sm'>(Blue Side)</span>
            </div>
            <div className='text-center'>KDA</div>
            <div className='text-center'>Damage</div>
            <div className='text-center'>Gold</div>
            <div className='text-center'>CS</div>
            <div className='text-center'>Wards</div>
            <div className='text-center'>Items</div>
         </div>

         <div className='flex flex-col gap-2 p-1'>
            <ExpandedParticipantInfo participantStats={participantsData[0]} highestDamageInGame={highestDamageInGame} />
            <ExpandedParticipantInfo participantStats={participantsData[1]} highestDamageInGame={highestDamageInGame} />
            <ExpandedParticipantInfo participantStats={participantsData[2]} highestDamageInGame={highestDamageInGame} />
            <ExpandedParticipantInfo participantStats={participantsData[3]} highestDamageInGame={highestDamageInGame} />
            <ExpandedParticipantInfo participantStats={participantsData[4]} highestDamageInGame={highestDamageInGame} />
         </div>
      </div>
   )
}


export function MatchSummaryCard(props: { matchId: string, puuid: string }) {
   const { matchId, puuid } = props;
   const [summonerIndex, setSummonerIndex] = useState<number>(0);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);
   const [matchData, setMatchData] = useState<MatchInformation | null>(null);
   const [summonerSpellsData, setSummonerSpellsData] = useState<SummonerSpells | null>(null);
   const [runesData, setRuneData] = useState<PerkData | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const fetchedMatchData: MatchInformation = await fetchMatchByMatchID(matchId);
            setMatchData(fetchedMatchData);

            const summonerParticipantIndex = fetchedMatchData.info.participants.findIndex((participant: any) => participant.puuid === puuid);
            setSummonerIndex(summonerParticipantIndex);

            const fetchedSummonerSpellData: SummonerSpells = await fetchSummonerSpellsData(fetchedMatchData.info.gameVersion)
            setSummonerSpellsData(fetchedSummonerSpellData);

            const fetchedRuneData: PerkData = await fetchRunesData(fetchedMatchData.info.gameVersion);
            setRuneData(fetchedRuneData);
            console.log('fetchedRuneData:', fetchedRuneData);
         }
         catch (error: any) {
            setError(error.message);
         }
         finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [matchId]);


   // handle card expansion
   const [isRotated, setIsRotated] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);
   function toggleCardExpansion() {
      setIsRotated(!isRotated);
      setIsExpanded(!isExpanded);
   }


   function getSummonerSpellByKey(summonerSpellKey: number): SummonerSpell | undefined {
      for (const spellKey in summonerSpellsData?.data) {
         if (summonerSpellsData.data[spellKey].key === summonerSpellKey.toString()) {
            return summonerSpellsData.data[spellKey];
         }
      }
      return undefined;
   }

   function findRune(perkId: number, slotIndex: number, runeId: number): Rune | undefined {
      const perk = runesData!.find(p => p.id === perkId);
      console.log('perk', perk)
      if (perk && perk.slots[slotIndex]) {
         return perk.slots[slotIndex].runes.find(r => r.id === runeId);
      }
      return undefined;
   }


   function findPerk(perkId: number): Perk | undefined {
      return runesData?.find(perk => perk.id === perkId);
   }

   function calculateMinionsPerMinute(totalMinionsKilled: number, gameDuration: number): string {
      return (totalMinionsKilled / (gameDuration / 60)).toFixed(2);
   }


   //TODO: Update params
   // returns xxm xxs formatted game time
   const formattedGameTime = () => {
      const minutes = Math.floor(matchData!.info.gameDuration / 60);
      const remainingSeconds = matchData!.info.gameDuration % 60;
      return `${minutes}m ${remainingSeconds}s`;
   }

   // needed for calculating damage percentage in ExpandedParticipantInfo
   const highestDamageInGame = (matchData?.info.participants.reduce((highestDamage: number, participant: any) => {
      return Math.max(highestDamage, participant.totalDamageDealtToChampions);
   }, 0));

   let backgroundColor = (matchData?.info.participants[summonerIndex].win ? WIN_BACKGROUND_COLOR : LOSS_BACKGROUND_COLOR);

   if (loading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return (
         <div>
            <p>{error}</p>
         </div>
      )


   }

   return (
      <div className='flex flex-col gap-1' >
         <div
            className='match-summary-card-top flex items-center gap-x-5 w-fit'
            // Tailwind CSS doesn't support inline styles for background colors using template literals directly within the class name
            style={{ backgroundColor: backgroundColor }}
         >

            <div className='MatchInfo flex flex-col items-center w-max'>
               <div>{matchData?.info.gameType}</div>
               <div>{matchData?.info.gameEndTimestamp}</div>
               <div>{`${matchData?.info.participants[summonerIndex].win ? 'Win' : 'Loss'}`}</div>
               <div className='flex justify-center gap-x-2'>
                  <div>{formattedGameTime()}</div>
               </div>
            </div>

            <div className='ParticipantLoadout grid grid-cols-4 grid-rows-2 gap-1 w-24 h-12'>
               <div className='col-span-2 row-span-2'>
                  < ChampionIcon championName={matchData!.info.participants[summonerIndex].championName} />
               </div>
               <SummonerSpellIcon
                  summonerSpell={getSummonerSpellByKey(matchData!.info.participants[summonerIndex].summoner1Id)!}
               />
               <PrimaryRuneIcon
                  rune={findRune(
                     matchData!.info.participants[summonerIndex].perks.styles[0].style,
                     0,
                     matchData!.info.participants[summonerIndex].perks.styles[0].selections[0].perk
                  )!}
               />
               <SummonerSpellIcon
                  summonerSpell={getSummonerSpellByKey(matchData!.info.participants[summonerIndex].summoner2Id)!}
               />
               <SecondaryPerkIcon
                  perk={findPerk(matchData!.info.participants[summonerIndex].perks.styles[1].style)!}
               />
            </div>

            <div className='ParticipantStatistics flex flex-col items-center w-max'>
               <div className='KDA'>
                  {`${matchData?.info.participants[summonerIndex].kills} / ${matchData?.info.participants[summonerIndex].deaths} / ${matchData?.info.participants[summonerIndex].assists}`}
               </div>
               <div className='CalculatedKDA'>{matchData?.info.participants[summonerIndex].kills.toFixed(2)}</div>
               <div className='CS'>
                  {`${matchData?.info.participants[summonerIndex].totalMinionsKilled} CS 
                  (${calculateMinionsPerMinute(matchData!.info.participants[summonerIndex].totalMinionsKilled, matchData!.info.gameDuration)})`}
               </div>
               <div className='Vision'>{`${matchData?.info.participants[summonerIndex].visionScore} vision`}</div>
            </div>

            <div className='ItemsSection grid grid-cols-4 grid-rows-2 gap-1 w-24 h-12'>
               <ItemIcon itemId={matchData!.info.participants[summonerIndex].item0.toString()} />
               <ItemIcon itemId={matchData!.info.participants[summonerIndex].item1.toString()} />
               <ItemIcon itemId={matchData!.info.participants[summonerIndex].item2.toString()} />
               <ItemIcon itemId={matchData!.info.participants[summonerIndex].item6.toString()} />
               <ItemIcon itemId={matchData!.info.participants[summonerIndex].item3.toString()} />
               <ItemIcon itemId={matchData!.info.participants[summonerIndex].item4.toString()} />
               <ItemIcon itemId={matchData!.info.participants[summonerIndex].item5.toString()} />
            </div>

            <div className='Participants flex gap-x-2'>
               <div className='left-team'>
                  {matchData!.info.participants.slice(0, 5).map((participant, index) => (
                     <ParticipantChampionIconAndSummonerName
                        key={index}
                        championName={participant.championName}
                        summonerName={participant.summonerName}
                     />
                  ))}
               </div>

               <div className='right-team'>
                  {matchData!.info.participants.slice(5, 10).map((participant, index) => (
                     <ParticipantChampionIconAndSummonerName
                        key={index}
                        championName={participant.championName}
                        summonerName={participant.summonerName}
                     />
                  ))}
               </div>


               <div className='bg-white bg-opacity-10 w-8 flex flex-col items-center'>
                  <button
                     className={`bg-white bg-opacity-10 size-5 mb-3 mt-auto flex items-center justify-center ${isRotated ? 'rotate-180' : ''}`}
                     onClick={toggleCardExpansion}
                  >
                     &#9660;
                  </button>
               </div>

            </div>

         </div>
         <div className={`flex flex-col ${isExpanded ? '' : 'hidden'}`} style={{ backgroundColor: backgroundColor }}>
            <ExpandedTeamOverview
               participantsData={[
                  matchData!.info.participants[0],
                  matchData!.info.participants[1],
                  matchData!.info.participants[2],
                  matchData!.info.participants[3],
                  matchData!.info.participants[4]
               ]}
               highestDamageInGame={highestDamageInGame!}
            />
            <ExpandedTeamOverview
               participantsData={[
                  matchData!.info.participants[5],
                  matchData!.info.participants[6],
                  matchData!.info.participants[7],
                  matchData!.info.participants[8],
                  matchData!.info.participants[9]
               ]}
               highestDamageInGame={highestDamageInGame!}
            />
         </div>
      </div>
   )
}
