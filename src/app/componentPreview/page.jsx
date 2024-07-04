'use client'
import MatchSummaryCard from '@/components/SummonerProfile/MatchSummaryCard';
import { matchData as sampleData } from '@/sampleData/formattedRiotAPI';

import { useEffect, useState } from 'react';

export default function MatchDetails() {

  return (
    <div className='flex flex-col items-center justify-center border'>
      <MatchSummaryCard matchData={sampleData} summonerIndex={1} />
      {/* Render match data here */}
      {/* <pre>{JSON.stringify(matchData, null, 2)}</pre> */}
    </div>
  );
}
