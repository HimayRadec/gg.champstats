import MatchSummaryCard from '@/components/SummonerProfile/MatchSummaryCard'
import React from 'react'

function ComponentPreview() {
   return (
      <div className='flex flex-col h-full items-center gap-2 justify-center'>
         <MatchSummaryCard win={false} />
         <MatchSummaryCard win={true} />
         <MatchSummaryCard win={false} />
      </div>
   )
}

export default ComponentPreview