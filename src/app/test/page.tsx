'use client'
import { fetchRunesData } from "@/utils/formatApiData/fetchLeagueOfLegendsData"
import { PerkData, Perk, RuneSlot, Rune } from "@/types/LeagueOfLegends"
import { useEffect, useState } from "react"
import Image from 'next/image'

function Test() {
   const [runesData, setRunesData] = useState<PerkData | null>(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await fetchRunesData('14.13.1')
            setRunesData(data)
         }
         catch (error: any) {
            console.error('Error fetching data:', error)
         }
      }

      fetchData()
   }, [])

   function findRune(perkId: number, slotIndex: number, runeId: number): Rune | undefined {
      const perk = runesData!.find(p => p.id === perkId);
      console.log('perk', perk)
      if (perk && perk.slots[slotIndex]) {
         return perk.slots[slotIndex].runes.find(r => r.id === runeId);
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
               Runes Data: {JSON.stringify(
                  runesData && Object.values(runesData)[0].name, null, 2
               )}
            </pre>
            <pre className='whitespace-pre-wrap'>
               {`Rune Searched: ${findRune(8200, 0, 8229,)?.name}`}
            </pre>
         </div>
      </div>
   )
}


export default Test
