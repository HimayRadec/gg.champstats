import Image from 'next/image';
import '../styles/MatchSummary.css';


export default function MatchSummary() {
   return (
      <div className='match-card-container'>
         <div className='large-match-card-container match-win'>
            <div className='match-card-content-container'>
               <div className='game-info'>
                  <div className='top-row'>
                     <div className='queue-type'>Ranked Solo</div>
                     <div className='time-elapsed'>3 hours ago</div>
                  </div>
                  <div className='middle-row'>
                     {/* displays new if match is new over the match lp gain/loss */}
                     <div className='new-match-tag'></div>
                     <div className="match-lp">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 128" transform="rotate(180)" className="lp-arrow gain">
                           <g data-name="Layer 2">
                              <path fill="#626696" d="M0 0l128 128L256 0z" data-name="Layer 1">
                              </path>
                           </g>
                        </svg>
                        <span className='lp-value'>10 LP</span>
                     </div>
                  </div>
                  <div className='bottom-row'>
                     <div className="victory-status">WIN</div>
                     <div className="match-duration">26:23</div>
                  </div>
               </div>
               <div className="group-two">
                  <div className="row-one">
                     <div className="champion">
                        <div className="champion-face">
                           <Image
                              src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Nasus.png"
                              alt="Nasus from League of Legends"
                              width={100}
                              height={100}
                              className='image-component'

                           />
                           <div className="champion-level">18</div>
                        </div>
                     </div>
                     <div className='summoner-spells'>
                        <div className="summoner-spell">
                           <Image
                              src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/spell/SummonerTeleport.png"
                              alt="Nasus from League of Legends"
                              width={22}
                              height={22}
                           />
                        </div>
                        <div className="summoner-spell">
                           <Image
                              src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/spell/SummonerHaste.png"
                              alt="Nasus from League of Legends"
                              width={22}
                              height={22}
                           />
                        </div>
                     </div>
                     <div className='runes'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/small-perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
                           alt="Nasus from League of Legends"
                           width={22}
                           height={22}
                        />
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/runes/8300.png"
                           alt="Nasus from League of Legends"
                           width={22}
                           height={22}
                        />
                     </div>
                  </div>
               </div>
               <h2>3</h2>
               <h2>/</h2>
               <h2>7</h2>
               <h2>/</h2>
               <h2>2</h2>
               <h2>2.57 KDA</h2>
               <h2>200 CS (9.7)</h2>
               <h2>11 vision</h2>
               <div className='item-list'>
                  <div className='main-item-list'>
                     <Image
                        className='item'
                        src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
                        alt="Abyssal Mask from League of Legends"
                        width={22}
                        height={22}
                     />
                     <Image
                        className='item'
                        src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
                        alt="Abyssal Mask from League of Legends"
                        width={22}
                        height={22}
                     />
                     <Image
                        className='item'
                        src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
                        alt="Abyssal Mask from League of Legends"
                        width={22}
                        height={22}
                     />
                     <Image
                        className='item'
                        src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
                        alt="Abyssal Mask from League of Legends"
                        width={22}
                        height={22}
                     />
                     <Image
                        className='item'
                        src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
                        alt="Abyssal Mask from League of Legends"
                        width={22}
                        height={22}
                     />
                     <Image
                        className='item'
                        src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
                        alt="Abyssal Mask from League of Legends"
                        width={22}
                        height={22}
                     />
                  </div>
                  <div className='vision-item'>
                     <Image
                        src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
                        alt="Abyssal Mask from League of Legends"
                        width={22}
                        height={22}
                     />
                  </div>
               </div>
               <div className="summoner-champions flex">
                  <div className='red-summoner-champions team-list'>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Rengar.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Diana.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Akali.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Ezreal.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Karma.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                  </div>
                  <div className='blue-summoner-champions team-list'>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Rengar.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Diana.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Akali.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Ezreal.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                     <div className='summoner'>
                        <Image
                           src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Karma.png"
                           alt="Nasus from League of Legends"
                           width={16}
                           height={16}
                        />
                        <p>Radec Jake</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
