import Image from 'next/image'
import React from 'react'

import { GiBroadsword } from "react-icons/gi";
import { IconContext } from "react-icons";


import "@/styles/MatchSummary.css"

export default function SideNavbar() {
   return (
      <div className='side-navbar flex flex-col h-screen w-fit'>

         <div className="side-game-icon-selector-container flex place-content-center w-full">
            <div className='game-icon-container flex place-content-center w-fit h-fit'>
               <a href="">
                  <Image
                     className='league-of-legends-icon'
                     src="/leagueoflegendsicon.png"
                     alt="League Of Legends Icon"
                     width={35}
                     height={35} />
               </a>
            </div>
         </div>

         <div className="side-navbar-links flex flex-col items-center">

            <div className='side-navbar-link-container'>
               <a className='side-navbar-link' href="">
                  <GiBroadsword />
               </a>
            </div>
            <div className='side-navbar-link-container'>
               <a className='side-navbar-link' href="">
                  <GiBroadsword />
               </a>
            </div>
            <div className='side-navbar-link-container'>
               <a className='side-navbar-link' href="">
                  <GiBroadsword />
               </a>
            </div>
            <div className='side-navbar-link-container'>
               <a className='side-navbar-link' href="">
                  <GiBroadsword />
               </a>
            </div>
            <div className='side-navbar-link-container'>
               <a className='side-navbar-link' href="">
                  <GiBroadsword />
               </a>
            </div>
            <div className='side-navbar-link-container'>
               <a className='side-navbar-link' href="">
                  <GiBroadsword />
               </a>
            </div>

         </div>


      </div>
   )
}
