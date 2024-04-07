"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Layout() {
    // Define the Champion interface
    interface Champion {
        version: string;
        id: string;
        // You can add other properties if needed
    }
    
    // Define the ChampionInfo interface
    interface ChampionInfo {
        type: string;
        format: string;
        version: string;
        data: Record<string, Champion>; // Represents an object with string keys and Champion values
    }

    // Declare the state variable with its type
    const [championId, setChampionId] = useState<string>("");

    useEffect(() => {
        // Fetch data when component mounts
        fetch('https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json') // Assuming you have an API endpoint serving champion data
            .then(response => response.json())
            .then((data: ChampionInfo) => {
                const championData = Object.values(data.data);
                setChampionId(championData[0].id); // Set championId state
            })
            .catch(error => console.error('Error fetching champion data:', error));
    }, []);

    return (
        <div>
            <div>
                <input className="search-input-box" type="text" />
                <button>Search for Champion</button>
            </div>
            <div>
                <h1 className="Search_Champ">Champions</h1>
                <div>
                    <h1>Version: {/* Display version here */}</h1>
                    <div>
                        Info
                        <div>
                            {championId}
                        </div>
                        <div className="champion-face">
                            <Image
                                src={`https://static.bigbrain.gg/assets/lol/riot_static/14.6.1/img/champion/${championId}.png`}
                                alt={`${championId} from League of Legends`}
                                width={100}
                                height={100}
                                className='image-component'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}