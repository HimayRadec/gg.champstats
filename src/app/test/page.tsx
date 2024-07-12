'use client'
import { fetchSummonerSpellsData } from "@/utils/formatApiData/fetchLeagueOfLegendsData"
import { SummonerSpells, SummonerSpell } from "@/types/LeagueOfLegends"
import { useEffect, useState } from "react"
import Image from 'next/image'

function Test() {
   const [summonerSpellsData, setSummonerSpells] = useState<SummonerSpells>()

   useEffect(() => {
      const fetchData = async () => {
         try {
            const fetchedSummonerSpells: SummonerSpells = await fetchSummonerSpellsData("14.10.584.5961")
            setSummonerSpells(fetchedSummonerSpells)
         }
         catch (error: any) {
            console.error('Error fetching data:', error)
         }
      }

      fetchData()
   }, [])

   function getSummonerSpellByKey(summonerSpellKey: string): SummonerSpell | undefined {
      for (const spellKey in summonerSpellsData?.data) {
         if (summonerSpellsData.data[spellKey].key === summonerSpellKey) {
            return summonerSpellsData.data[spellKey];
         }
      }

      return undefined;
   }

   return (
      <div className='flex flex-col items-center justify-center'>
         <div>
            TESTING AREA
         </div>
         <div className='mt-4 p-4 rounded shadow items-center flex flex-col border'>
            <h2 className='text-xl font-bold mb-2 m-auto w-max'>Summoner Spells</h2>
            <pre className='whitespace-pre-wrap'>
               Summoner Spells: {JSON.stringify(
                  summonerSpellsData?.data && Object.values(summonerSpellsData.data)[0].name, null, 2
               )}
            </pre>
            <pre className='whitespace-pre-wrap'>
               {`Summoner Spell Searched: ${getSummonerSpellByKey('4')?.name}`}
            </pre>
            {<SummonerSpellIcon summonerSpellData={getSummonerSpellByKey('4')!} />}
         </div>
      </div>
   )
}

// Fetches the summoner spell icon using the summoner spell name
function SummonerSpellIcon(props: { summonerSpellData: SummonerSpell }) {
   const { summonerSpellData } = props;
   if (!summonerSpellData) return null;
   return (
      <div className='SummonerSpellIcon relative h-16 w-16 border'>
         <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/${summonerSpellData.image.full}`}
            alt={`Summoner ${summonerSpellData.name}`}
            sizes='100%'
            priority={false}
            fill
         />
      </div>
   );
}
export default Test
