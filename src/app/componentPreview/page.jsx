'use client'
import { fetchAccountByRiotID } from "@/utils/formatApiData/fetchLeagueOfLegendsData";
import { AccountInformation } from "@/types/LeagueOfLegends";
import { useEffect, useState } from "react";

export default function MatchDetails() {
  const [accountData, setAccountData] = useState({
    puuid: '',
    gameName: '',
    tagLine: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAccountData = await fetchAccountByRiotID('radec himay', 'NA1');

      console.log(`fetchedAccountData: ${JSON.stringify(fetchedAccountData)}`);
      setAccountData(fetchedAccountData);
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center border'>
      <div>accountData: {JSON.stringify(accountData)}</div>
    </div>
  );
}
