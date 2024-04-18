
import { MdFeedback } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";


import "@/styles/MatchSummary.css"

export default function MatchSummaryHeader() {
   return (
      <nav className="header">

         <div className="logo-text">ChampStats.gg</div>

         <div className="header-middle">

            <div className="header-search-container">
               <input className="header-search-bar" type="text" placeholder="Search Summoner or Champion w-fit" />
            </div>

            <div className="header-region-selector clickable">
               <div className="header-region-tag">
                  NA
               </div>
            </div>

            <div className="search-button clickable">
               <IoIosSearch size={22} />
            </div>

         </div>

         <div className="header-right ">
            <div className="header-icon">
               <FaGear />
            </div>
            <div className="header-icon">
               <MdFeedback size={22} />
            </div>
            <div className="header-icon">
               <FaBell />
            </div>
            <a className="header-login-button">Log In</a>
         </div>

      </nav>

   );
};
