'use client'
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { IoIosSearch } from "react-icons/io";


function ProfileSearchBar() {
   //TODO: Allow Champion Search by Name
   //TODO: Allow Role Search
   //TODO: Allow Region Search
   //TODO: Implement Region Swapping
   const [summonerName, setSummonerName] = useState("");
   const [summonerPUUID, setSummonerPUUID] = useState("None");
   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSummonerName(e.target.value);
   };

   // Example: Radec Himay#NA1 -> radec%20himay/NA1
   const transformSummonerName = (summonerName: string): { gameName: string; tagLine: string } => {
      // 
      if (!summonerName.includes('#')) {
         summonerName += '#NA1';
      }

      let splitName = summonerName.split('#');
      let gameName = splitName[0];
      let tagLine = splitName[1];

      gameName = gameName.toLowerCase();
      gameName = gameName.replace(/ /g, '%20');

      return { gameName, tagLine };
   };

   const searchSummonerName = () => {
      const { gameName, tagLine } = transformSummonerName(summonerName);

      window.location.href = `/lol/${gameName}-${tagLine}`;
      setSummonerName("");
   };

   return (
      <div className="header-middle">

         <form
            action={searchSummonerName}
            className="header-search-container gap-x-2"
         >
            <input
               className="header-search-bar"
               type="text"
               placeholder="Game Name#Tag"
               onChange={handleInputChange}
               value={summonerName}
            />

            <div className="header-region-selector clickable">
               <div className="header-region-tag">

                  NA
               </div>
            </div>

            <button className="search-button clickable">
               <IoIosSearch size={22} />
            </button>
         </form>
      </div>
   )
}

export default ProfileSearchBar