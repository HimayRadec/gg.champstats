'use client'
import MatchSummaryCard from '@/components/SummonerProfile/MatchSummaryCard';
import { matchData as sampleData } from '@/sampleData/formattedRiotAPI';

import { useEffect, useState } from 'react';

export default function MatchDetails({ matchId }) {
  const [matchData, setMatchData] = useState(null);
  const [error, setError] = useState(null);

  matchId = 'NA1_4998629525'; // Default match ID for testing

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await fetch(`/api/match?matchId=${matchId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setMatchData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMatchData();
  }, [matchId]);

  // if (error) return <div>Error: {error}</div>;
  // if (!matchData) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center justify-center border'>
      <MatchSummaryCard matchData={sampleData} summonerIndex={1} />
      {/* Render match data here */}
      {/* <pre>{JSON.stringify(matchData, null, 2)}</pre> */}
    </div>
  );
}
