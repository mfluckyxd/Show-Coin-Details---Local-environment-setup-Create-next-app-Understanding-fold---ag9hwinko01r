'use client'
import React, { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';

function Home() {
    const [coins, setCoins] = useState([]);

    

    const url = "https://api.coinlore.net/api/tickers/"
    const fetchData = async (url)=>{
        const res = await fetch(url);
        const {data} = await res.json();
        
        setCoins(data.slice(0, 20))
    }

    useEffect(()=>{
        fetchData(url)
    },[])

    return (
        <div className='home'>
            <h1>Top 20 Cryptos</h1>
            <div className='coins-container'>
                {coins.map((coin, index) => (
                    <CoinCard coin={coin} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Home