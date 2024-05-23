
/*
Created By Himay
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

'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import { SummonerInfo } from '@/types/MatchSummary';

//Hex color codes for win and loss
const winBackgroundColor = '#12264a';
const lossBackgroundColor = '#5e1515';

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

function SummonerSpellIcon(props: { summonerSpell: string }) {
   const { summonerSpell } = props;
   return (
      <div className='SummonerSpellIcon relative h-full w-full'>
         <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/${summonerSpell}.png`}
            alt='profile-icon'
            sizes='100%'
            fill
         />
      </div>
   );
}

function PrimaryRuneIcon(props: { runeName: string, runeTreeName: string }) {
   const { runeName, runeTreeName } = props;
   return (
      <div className='PrimaryRuneIcon relative h-full w-full'>
         <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${runeTreeName}/${runeName}/${runeName}.png`}
            alt='profile-icon'
            sizes='100%'
            fill
         />
      </div>
   );
}

function SecondaryRuneIcon(props: { runeTreeId: string, runeTreeName: string }) {
   const { runeTreeId, runeTreeName } = props;
   return (
      <div className='SecondaryRuneIcon relative h-full w-full'>
         <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${runeTreeId}_${runeTreeName}.png`}
            alt='profile-icon'
            sizes='100%'
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
               <SecondaryRuneIcon runeTreeId='7200' runeTreeName='Domination' />
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

   let backgroundColor = (participantsData[0].win ? winBackgroundColor : lossBackgroundColor);
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


export default function MatchSummaryCard(props: { matchData: any, summonerIndex: number }) {
   const { matchData, summonerIndex } = props;

   // handle card expansion
   const [isRotated, setIsRotated] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);
   function toggleCardExpansion() {
      setIsRotated(!isRotated);
      setIsExpanded(!isExpanded);
   }

   // returns xxm xxs formatted game time
   const formattedGameTime = () => {
      const minutes = Math.floor(matchData.info.gameDuration / 60);
      const remainingSeconds = matchData.info.gameDuration % 60;
      return `${minutes}m ${remainingSeconds}s`;
   }

   // needed for calculating damage percentage in ExpandedParticipantInfo
   const highestDamageInGame = (matchData.info.participants.reduce((highestDamage: number, participant: any) => {
      return Math.max(highestDamage, participant.totalDamageDealtToChampions);
   }, 0));

   const summonerInfo: SummonerInfo = {
      queueType: 'Ranked Solo',
      timeAgo: '4 days ago',
      gameDurationSeconds: 1510,
      win: false,
      kills: 4,
      deaths: 1,
      assists: 6,
      KDA: 10.00,
      cs: 182,
      csPerMin: 6.37,
      visionScore: 24,
      items: ['3020', '3871', '1058', '6655', '1058', '0', '3364'],
      championName: 'Ahri',
      summonerSpells: ['SummonerExhaust', 'SummonerFlash'],
      primaryRune: 'ArcaneComet',
      primaryRuneTree: 'Sorcery',
      secondaryRuneId: '7200',
      secondaryRuneTree: 'Domination',
   }
   const win = matchData.info.participants[summonerIndex].win;

   let backgroundColor = (win ? winBackgroundColor : lossBackgroundColor);


   return (
      <div className='flex flex-col gap-1' >
         <div
            className='match-summary-card-top flex items-center gap-x-5 w-fit'
            // Tailwind CSS doesn't support inline styles for background colors using template literals directly within the class name
            style={{ backgroundColor: backgroundColor }}
         >

            <div className='flex flex-col items-center w-max'>
               <div>{summonerInfo.queueType}</div>
               <div>{summonerInfo.timeAgo}</div>
               {/* <div className='flex w-full justify-center gap-x-2	'>
                  <p className='font-size-lg font-extrabold	'>^</p>
                  <div>30 LP</div>
               </div> */}
               <div>{`${summonerInfo.win ? 'Win' : 'Loss'}`}</div>
               <div className='flex justify-center gap-x-2'>
                  <div>{formattedGameTime()}</div>
               </div>
            </div>

            <div className='grid grid-cols-4 grid-rows-2 gap-1 w-24 h-12'>
               <div className='col-span-2 row-span-2'>
                  < ChampionIcon championName={summonerInfo.championName} />
               </div>
               <SummonerSpellIcon summonerSpell={summonerInfo.summonerSpells[0]} />
               <PrimaryRuneIcon runeName={summonerInfo.primaryRune} runeTreeName={summonerInfo.primaryRuneTree} />
               <SummonerSpellIcon summonerSpell={summonerInfo.summonerSpells[1]} />
               <SecondaryRuneIcon runeTreeId={summonerInfo.secondaryRuneId} runeTreeName={summonerInfo.secondaryRuneTree} />
            </div>

            <div className='flex flex-col items-center w-max'>
               <div>{`${summonerInfo.kills} / ${summonerInfo.deaths} / ${summonerInfo.assists}`}</div>
               <div>{summonerInfo.KDA.toFixed(2)}</div>
               <div>{`${summonerInfo.cs} (${summonerInfo.csPerMin})`}</div>
               <div>{`${summonerInfo.visionScore} vision`}</div>
            </div>

            <div className='ItemsSection grid grid-cols-4 grid-rows-2 gap-1 w-24 h-12'>
               <ItemIcon itemId={summonerInfo.items[0]} />
               <ItemIcon itemId={summonerInfo.items[1]} />
               <ItemIcon itemId={summonerInfo.items[2]} />

               {/* Trinket */}
               <ItemIcon itemId={summonerInfo.items[6]} />

               <ItemIcon itemId={summonerInfo.items[3]} />
               <ItemIcon itemId={summonerInfo.items[4]} />
               <ItemIcon itemId={summonerInfo.items[5]} />
            </div>

            <div className='flex gap-x-2'>
               <div className='left-team'>
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[0].championName} summonerName={matchData.info.participants[0].summonerName} />
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[1].championName} summonerName={matchData.info.participants[1].summonerName} />
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[2].championName} summonerName={matchData.info.participants[2].summonerName} />
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[3].championName} summonerName={matchData.info.participants[3].summonerName} />
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[4].championName} summonerName={matchData.info.participants[4].summonerName} />
               </div>
               <div className='right-team'>
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[5].championName} summonerName={matchData.info.participants[5].summonerName} />
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[6].championName} summonerName={matchData.info.participants[6].summonerName} />
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[7].championName} summonerName={matchData.info.participants[7].summonerName} />
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[8].championName} summonerName={matchData.info.participants[8].summonerName} />
                  <ParticipantChampionIconAndSummonerName championName={matchData.info.participants[9].championName} summonerName={matchData.info.participants[9].summonerName} />
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
                  matchData.info.participants[0],
                  matchData.info.participants[1],
                  matchData.info.participants[2],
                  matchData.info.participants[3],
                  matchData.info.participants[4]
               ]}
               highestDamageInGame={highestDamageInGame}
            />
            <ExpandedTeamOverview
               participantsData={[
                  matchData.info.participants[5],
                  matchData.info.participants[6],
                  matchData.info.participants[7],
                  matchData.info.participants[8],
                  matchData.info.participants[9]
               ]}
               highestDamageInGame={highestDamageInGame}
            />
         </div>
      </div>
   )
}
