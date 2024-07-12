import { useEffect, useState } from "react"
import { fetchSummonerProfile } from "@/utils/formatApiData/fetchLeagueOfLegendsData";
import { AccountInformation, SummonerProfile } from "@/types/LeagueOfLegends";
import Image from "next/image";


function SummonerProfileComponent(props: { accountData: AccountInformation }) {
   const [summonerProfileData, setSummonerProfileData] = useState<SummonerProfile | null>(null);

   // On mount, fetch the SummonerProfile data from the Riot API
   useEffect(() => {

      const fetchData = async () => {
         try {
            const fetchedSummonerProfileData: SummonerProfile = await fetchSummonerProfile(props.accountData.puuid);
            setSummonerProfileData(fetchedSummonerProfileData);
         }
         catch (error: any) {
            console.error(error.message);
         }
      };

      fetchData();
   }, [props.accountData.puuid]);


   return (
      <div className="flex items-center gap-x-4 p-4 border">

         <div className="border-4 rounded-md w-fit">
            <Image src={`https://ddragon.leagueoflegends.com/cdn/14.13.1/img/profileicon/${summonerProfileData?.profileIconId}.png`} alt="Summoner Icon" width={100} height={100} />
         </div>

         <div className="flex flex-col items-center gap-y-2">

            <h1 className="font-bold">
               {props.accountData.gameName} <span className="font-light"> #{props.accountData.tagLine} </span>
            </h1>

            <div className="px-6 py-1 rounded-md bg-[#3273fa]">Update</div>

         </div>


      </div>


   )
}

export default SummonerProfileComponent