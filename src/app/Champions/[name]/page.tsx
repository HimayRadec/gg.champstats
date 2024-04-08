// pages/Champion/[name].tsx
"use client"
import { useEffect } from 'react';


interface ChampionDetailsProps {
    name: string;
}

function ChampionInfo({ name }: ChampionDetailsProps) {
    // Use name to fetch and display champion details
    useEffect(() => {
        // Fetch champion details using name
    }, [name]);

    return (
        <div>
            {/* Display champion details */}
            <h1>Champion Details for {name}</h1>
        </div>
    );
}

export default ChampionInfo;