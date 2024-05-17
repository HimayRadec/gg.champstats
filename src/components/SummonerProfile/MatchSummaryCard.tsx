'use client'
import React from 'react'

import { useState } from 'react';

import { matchData } from '@/sampleData/riotAPI'
import Image from 'next/image'
import Link from 'next/link';
import { match } from 'assert';

let matchSummaryData = matchData
//Hex color codes for win and loss
const winBackgroundColor = '#12264a';
const lossBackgroundColor = '#5e1515';

function ChampionIcon(props: { championName: string }) {
   const { championName } = props;
   return (
      <div className='champion-icon relative h-full w-full'>
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
      <div className='summoner-spell-icon relative h-full w-full'>
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
      <div className='primary-rune-icon relative h-full w-full'>
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
      <div className='secondary-rune-icon relative h-full w-full'>
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
         <div className='item-icon bg-white bg-opacity-5 h-full w-full'>
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

function ParticipantProfile(props: { participantIndex: number }) {
   const { participantIndex } = props;
   return (
      <div className='participant-profile flex items-center gap-x-1 w-fit'>
         <div className='relative w-4 h-4'>
            <ChampionIcon championName={`${matchSummaryData.info.participants[participantIndex].championName}`} />
         </div>
         <div>
            {matchSummaryData.info.participants[participantIndex].summonerName}
         </div>
      </div>
   );
}

function ExpandedParticipantInfo(props: { participantDamage: number, highestDamageInGame: number }) {

   const { participantDamage, highestDamageInGame } = props;
   function calculateDamagePercentage(participantDamage: number, highestDamageInGame: number): string {
      const percentage = (participantDamage / highestDamageInGame) * 100;
      const roundedPercentage = Math.round(percentage);
      return `${roundedPercentage}%`;
   }


   return (
      <div className='ParticipantOverview grid grid-cols-8 h-[36px]'>

         <div className='ParticipantInfo flex col-span-2'>
            <div className='grid grid-cols-4 grid-rows-2 w-[76px] gap-1'>
               <div className='col-span-2 row-span-2'>
                  <ChampionIcon championName='Yorick' />
               </div>
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

         <div className='KDA text-center'>
            2 / 1 / 3
         </div>

         <div className='DamageToChampionsColumn flex flex-col items-center'>
            <p className='DamageToChampionsValue text-center'>{participantDamage}</p>
            <div className='DamageToChampionsBar w-4/5 h-2 bg-white bg-opacity-10 relative'>
               <div
                  className={`h-full bg-white bg-opacity-20 absolute`}
                  style={{ width: `${calculateDamagePercentage(participantDamage, highestDamageInGame)}` }}
               >
               </div>
            </div>
         </div>

         <div className="GoldColumn text-center">
            10,000
         </div>

         <div className="CSColumn text-center">
            200
         </div>

         <div className="WardsColumn text-center">
            5
         </div>

         <div className='flex justify-center'>
            <div className='ItemsSection grid grid-cols-4 grid-rows-2 gap-1 w-[76px]'>
               <ItemIcon itemId='3020' />
               <ItemIcon itemId='3871' />
               <ItemIcon itemId='1058' />
               {/* Trinket */}
               <ItemIcon itemId='3364' />
               <ItemIcon itemId='6655' />
               <ItemIcon itemId='1058' />
               <ItemIcon itemId='0' />
            </div>
         </div>

      </div>
   )

}
function TeamOverview(props: { win: boolean }) {
   const { win } = props;

   let backgroundColor = (win ? winBackgroundColor : lossBackgroundColor);
   let textColor = (win ? '#4287f5' : '#f54242');

   return (
      <div style={{ backgroundColor: backgroundColor }}>

         <div className='TeamOverviewHeader grid grid-cols-8 bg-black bg-opacity-75 p-1'>
            <div className='col-span-2 flex gap-1 items-end'>
               <div className='text-sm ' style={{ color: textColor }}>{`${win ? 'Victory' : 'Defeat'}`}</div>
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
            <ExpandedParticipantInfo participantDamage={10} highestDamageInGame={20} />
            <ExpandedParticipantInfo participantDamage={10} highestDamageInGame={20} />
            <ExpandedParticipantInfo participantDamage={10} highestDamageInGame={20} />
            <ExpandedParticipantInfo participantDamage={10} highestDamageInGame={20} />
            <ExpandedParticipantInfo participantDamage={10} highestDamageInGame={20} />
         </div>
      </div>
   )
}


export default function MatchSummaryCard(props: { win: boolean }) {
   const { win } = props;

   // handle card expansion
   const [isRotated, setIsRotated] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);
   function toggleCardExpansion() {
      setIsRotated(!isRotated);
      setIsExpanded(!isExpanded);
   }

   const participantIndex = 0;


   let backgroundColor = (win ? winBackgroundColor : lossBackgroundColor);


   return (
      // Tailwind CSS doesn't support inline styles for background colors using template literals directly within the class name
      <div className='flex flex-col gap-1' >
         <div className='match-summary-card-top flex items-center gap-x-5 w-fit' style={{ backgroundColor: backgroundColor }}>
            <div className='flex flex-col items-center w-max'>
               <div>Ranked Solo</div>
               <div>4 days ago</div>
               <div className='flex w-full justify-center gap-x-2	'>
                  <p className='font-size-lg font-extrabold	'>^</p>
                  <div>30 LP</div>
               </div>
               <div className='flex justify-center gap-x-2'>
                  <div>Loss</div>
                  <div>{matchSummaryData.info.gameDuration}</div>
               </div>
            </div>
            {/* User Profile */}
            <div className='grid grid-cols-4 grid-rows-2 gap-1 w-24 h-12'>
               <div className='col-span-2 row-span-2'>
                  < ChampionIcon championName='Velkoz' />
               </div>
               <SummonerSpellIcon summonerSpell='SummonerExhaust' />
               <PrimaryRuneIcon runeName='ArcaneComet' runeTreeName='Sorcery' />
               <SummonerSpellIcon summonerSpell='SummonerFlash' />
               <SecondaryRuneIcon runeTreeId='7200' runeTreeName='Domination' />
            </div>
            <div className='flex flex-col items-center w-max'>
               <div>4/1/6</div>
               <div>10.00 KDA</div>
               <div>182 CS (6.37)</div>
               <div>24 vision</div>
            </div>
            {/* Items */}
            <div className='ItemsSection grid grid-cols-4 grid-rows-2 gap-1 w-24 h-12'>
               <ItemIcon itemId='3020' />
               <ItemIcon itemId='3871' />
               <ItemIcon itemId='1058' />
               {/* Trinket */}
               <ItemIcon itemId='3364' />
               <ItemIcon itemId='6655' />
               <ItemIcon itemId='1058' />
               <ItemIcon itemId='0' />
            </div>
            {/* Summoners In Match */}
            <div className='flex gap-x-2'>
               <div className='left-team'>
                  <ParticipantProfile participantIndex={0} />
                  <ParticipantProfile participantIndex={1} />
                  <ParticipantProfile participantIndex={2} />
                  <ParticipantProfile participantIndex={3} />
                  <ParticipantProfile participantIndex={4} />
               </div>
               <div className='right-team'>
                  <ParticipantProfile participantIndex={5} />
                  <ParticipantProfile participantIndex={6} />
                  <ParticipantProfile participantIndex={7} />
                  <ParticipantProfile participantIndex={8} />
                  <ParticipantProfile participantIndex={9} />
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
            <TeamOverview win={matchData.info.teams[0].win} />
            <TeamOverview win={matchData.info.teams[1].win} />
         </div>
      </div>
   )
}
