'use client';
import MatchSummary from '@/components/MatchSummary';
import { useState, useEffect } from 'react';

export default function Page() {

   const [summonerLevel, setSummonerLevel] = useState(null);


   const summonerName = 'Radec Himay';
   const summonerApiUrl = `lol/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}?`;
   // const apiKey = "RGAPI-ccd5b632-c986-439a-874a-40472a9e0ccf";
   const apiKey = process.env.NEXT_PUBLIC_LEAGUE_API_KEY;
   console.log('API Key:', apiKey);

   const apiUrl = `https://na1.api.riotgames.com/${summonerApiUrl}api_key=${apiKey}`

   console.log(apiUrl);

   useEffect(() => {
      fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
            console.log(data);
            setSummonerLevel(data.summonerLevel);
            console.log(data.summonerLevel);
         })
         .catch(error => console.error('There was an error!', error))
   }, []);


   return (
      <div className='flex justify-center items-center'>
         {/* <h1>Himay Page</h1> */}
         {/* <p>Summoner Level: {summonerLevel}</p> */}
         <MatchSummary />
      </div>
   );
}

