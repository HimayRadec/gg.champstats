import '../Champions.css';
import { useEffect, useState } from 'react';
import { promises as fs } from 'fs';
import Image from 'next/image';


export default async function Layout(){
    const file = await fs.readFile(process.cwd() + '/src/app/Champions/championData.json', 'utf8');
    const info = JSON.parse(file);

    const cData = Object.values(info.data)
    const championId = cData[0].id;
    // const [searchText, setSearchText] = useState("");
    // const [championData, setChampionData] = useState("");
    //const API_KEY = process.env.NEXT_PUBLIC_LEAGUE_API_KEY
    //console.log(API_KEY)
    //const APICallString = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${API_KEY}`;
    // Handle the API call
    // const response = await fetch(APICallString);
    // const data = await response.json();
    // setPlayerData(data);

    return (
        <div>
            <div>
                
                <input className="search-input-box" type="text" />
                <button>Search for Champion</button>
            </div>
            <div>
                <h1 className="Search_Champ">Champions</h1>
                <div>
                    <h1>Version: {info.version}</h1>
                    <div>
                        Info
                        <div>
                            {(cData[0].id)}
                        </div>
                        <div className="champion-face">
                           {/* <Image
                              src={`https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/Nasus.png`}
                              alt="Nasus from League of Legends"
                              width={100}
                              height={100}
                              className='image-component'
                           /> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}