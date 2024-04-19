import React from 'react'

export default function MatchSummaryCard() {
   return (
      <div className='flex items-center gap-x-5 bg-[#59343b] w-fit'>

         <div className='flex flex-col items-center w-max'>
            <div>Ranked Solo</div>
            <div>4 days ago</div>
            <div className='flex w-full justify-center gap-x-2	'>
               <div>^</div>
               <div>30 LP</div>
            </div>
            <div className='flex justify-center gap-x-2'>
               <div>Loss</div>
               <div>27:12</div>
            </div>
         </div>

         <div className='grid grid-cols-4 grid-rows-2 gap-1 h-1/2'>
            <div className='col-span-2 row-span-2 bg-[#f5f5f5]'>Damage</div>
            <div className='bg-[#f5f5f5]'>2.5</div>
            <div className='bg-[#f5f5f5]'>200</div>
            <div className='bg-[#f5f5f5]'>20</div>
            <div className='bg-[#f5f5f5]'>20k</div>

         </div>

         <div className='flex flex-col items-center w-max'>
            <div>4/1/6</div>
            <div>10.00 KDA</div>
            <div>182 CS (6.37)</div>
            <div>24 vision</div>
         </div>

         <div className='grid grid-cols-4 grid-rows-2 gap-1 h-1/2'>
            <div className='bg-[#f5f5f5]'>2.5</div>
            <div className='bg-[#f5f5f5]'>20</div>
            <div className='bg-[#f5f5f5]'>20k</div>
            <div className='bg-[#f5f5f5]'>200</div>
            <div className='bg-[#f5f5f5]'>20</div>
            <div className='bg-[#f5f5f5]'>20k</div>
            <div className='bg-[#f5f5f5]'>20k</div>
         </div>

         <div className='flex gap-x-2'>

            <div className='left-team'>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
            </div>

            <div className='right-team'>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
               <div className='flex gap-x-1 w-fit'>
                  <div>
                     O
                  </div>
                  <div>
                     Radec Himay
                  </div>
               </div>
            </div>
            <div className='border w-8 flex flex-col items-center justify-end	'>
               <div className='border size-5 mb-3'>

               </div>
            </div>

         </div>
      </div>
   )
}
