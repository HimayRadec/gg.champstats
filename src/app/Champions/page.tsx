"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';

import '../../styles/champion.css'

export default function Champions() {
    // Define the Champion interface
    interface Champion {
        version: string;
        id: string;
        name: string;
        // Add others if needed
    }
    
    // Define the ChampionInfo interface that is from data from api
    interface ChampionInfo {
        type: string;
        format: string;
        version: string;
        data: Record<string, Champion>; // Represents an object with string keys and Champion values
    }

    // Declare the state variable with its type
    const [championData, setChampionData] = useState<{ id: string; name: string }[]>([]);
    const [baseVersion, setBaseVersion] = useState<string>("");

    useEffect(() => {
        // Fetch data when component mounts
        fetch('https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json') 
            .then(response => response.json())
            .then((data: ChampionInfo) => {
                const champions = Object.values(data.data).map(champion => ({
                    id: champion.id,
                    name: champion.name
                }));
                setChampionData(champions); // Set championData state
                setBaseVersion(data.version); // Set baseVersion state
            })
            .catch(error => console.error('Error fetching champion data:', error));
    }, []);

    return (
        <div>
          <div className='header'>
            <input className="search-input-box" type="text" />
            <button className='search-button'>Search</button>
          </div>
          <div>
            
            <div className='all-champions'>
              <div className='champion-header'>
                <h1 className="champion-info-header">Champions</h1>
                <div className='champion-header-mini'>
                  <div>
                    Click Champion for More Info 
                  </div>
                  <div>
                    Patch: {baseVersion}
                  </div>
                </div>
              </div>
              <div className='champion-container'>
                {championData.map(champion => (
                  <Link key={champion.name} href={`/Champions/${champion.name}`}>
                      
                      <div className='champ-name-icon'>
                        <div className='champ-name'>
                          {champion.name}
                        </div>
                        <div className="champion-face">
                          <img
                            src={`https://static.bigbrain.gg/assets/lol/riot_static/14.7.1/img/champion/${champion.id}.png`}
                            alt={`${champion.name} from League of Legends`}
                            width={100}
                            height={100}
                            className='champion-image'
                          />
                        </div>
                      </div>
                    
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}