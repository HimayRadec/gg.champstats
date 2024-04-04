import Image from 'next/image';
import styles from '../../public/styles/MatchSummary.module.css';



export default function MatchSummary() {
   return (
      <div className='border-solid border-2 border-sky-500 bg-cyan-950 flex'>
         <div>
            <h3>Ranked Solo</h3>
            <p>3 hours ago</p>
            <h2>21 LP</h2>
            <h2>WIN</h2>
            <h2>25:20</h2>
         </div>
         <Image
            src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Nasus.png"
            alt="Nasus from League of Legends"
            width={100}
            height={100}
         />
         <div className='summoner-spells'>
            <Image
               src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/spell/SummonerTeleport.png"
               alt="Nasus from League of Legends"
               width={22}
               height={22}
            />
            <Image
               src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/spell/SummonerHaste.png"
               alt="Nasus from League of Legends"
               width={22}
               height={22}
            />
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
         <h2>3</h2>
         <h2>/</h2>
         <h2>7</h2>
         <h2>/</h2>
         <h2>2</h2>
         <h2>2.57 KDA</h2>
         <h2>200 CS (9.7)</h2>
         <h2>11 vision</h2>
         <div>
            <Image
               src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
               alt="Abyssal Mask from League of Legends"
               width={22}
               height={22}
            />
            <Image
               src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
               alt="Abyssal Mask from League of Legends"
               width={22}
               height={22}
            />
            <Image
               src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
               alt="Abyssal Mask from League of Legends"
               width={22}
               height={22}
            />
            <Image
               src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
               alt="Abyssal Mask from League of Legends"
               width={22}
               height={22}
            />
            <Image
               src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
               alt="Abyssal Mask from League of Legends"
               width={22}
               height={22}
            />
            <Image
               src="https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/item/8020.png"
               alt="Abyssal Mask from League of Legends"
               width={22}
               height={22}
            />
         </div>
         <div className="summoner-champions flex">
            <div className='red-summoner-champions'>
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
            <div className='blue-summoner-champions'>
               <div className='summoner-champion'>
                  <Image
                     src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Rengar.png"
                     alt="Nasus from League of Legends"
                     width={16}
                     height={16}
                  />
                  <p>Radec Jake</p>
               </div>
               <div className='summoner-champion'>
                  <Image
                     src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Diana.png"
                     alt="Nasus from League of Legends"
                     width={16}
                     height={16}
                  />
                  <p>Radec Jake</p>
               </div>
               <div className='summoner-champion'>
                  <Image
                     src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Akali.png"
                     alt="Nasus from League of Legends"
                     width={16}
                     height={16}
                  />
                  <p>Radec Jake</p>
               </div>
               <div className='summoner-champion'>
                  <Image
                     src="https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Ezreal.png"
                     alt="Nasus from League of Legends"
                     width={16}
                     height={16}
                  />
                  <p>Radec Jake</p>
               </div>
               <div className='summoner-champion'>
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
   );
};
