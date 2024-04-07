// // To inform next js, this is a client component 
// "use client"; 
// import { useEffect, useState } from "react";

// export default function Layout() {
//    const [searchText, setSearchText] = useState("");
//    const [playerData, setPlayerData] = useState(null);
   
   
   
   
//    useEffect(() => {
//       // This effect will run only when searchText changes
//       if(searchText !== "") {
//          const getData = async () => {
//             try {
//                const API_KEY = process.env.NEXT_PUBLIC_LEAGUE_API_KEY
//                //const API_KEY = 'RGAPI-ccd5b632-c986-439a-874a-40472a9e0ccf'
//                console.log(API_KEY)
//                // Set up the correct API Call
//                const APICallString = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${API_KEY}`;
//                console.log(APICallString);
//                // Handle the API call
//                const response = await fetch(APICallString);
//                const data = await response.json();
//                setPlayerData(data);
//             } catch (error) {
//                console.error("Error fetching data:", error);
//             }
//          };
//          getData();
//       }
//    }, [searchText]);

//    return (
//       <div>
//          <div className="container">
//             <h5>League of Legends Player Searcher</h5>
//             <input className="search-input-box" type="text" onChange={e => setSearchText(e.target.value)} />
//             <button>Search For Player</button>
//             {playerData && (
//                <div>
//                   <h2>Player Data</h2>
//                   <pre>{JSON.stringify(playerData, null, 2)}</pre>
//                </div>
//             )}
//          </div>
//       </div>
//    );
// };

export default function MyPage() {
   return (
      <div>
         Yo
      </div>
   );
}