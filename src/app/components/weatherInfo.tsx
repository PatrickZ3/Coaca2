"use client";
import React from 'react'
import Image from 'next/image';

type weatherProps = {
    realFeel: number;
    chanceOfRain: number;
    wind: number;
    skyCondition: string;
}

export default function WeatherInfo({ realFeel, chanceOfRain, wind, skyCondition }: weatherProps) {
    return (
        
        <div className="container">
            <div className="leftContainer">
                <div className="innerContainer">
                    <div className="left">
                    <Image src='/temp.svg' alt="Weather" className="infoSymbol" width={40} height={40}/>
                    </div>
                    <div className="right">
                        <div className="info">Real Feel</div>
                        <div className="content"> {realFeel}°</div>
                    </div>
                </div>
                <div className="innerContainer">
                    <div className="left">
                        <Image src='/droplet.svg' alt="Weather" className="infoSymbol" width={40} height={40}/>
                    </div>
                    <div className="right">
                        <div className="info">Chance of rain</div>
                        <div className="content"> {chanceOfRain}%</div>
                    </div>
                </div>
            </div>
            <div className="rightContainer">
                <div className="innerContainer">
                    <div className="left">
                        <Image src='/wind.svg' alt="Weather" className="infoSymbol" width={40} height={40}/>
                    </div>
                    <div className="right">
                        <div className="info">Wind</div>
                        <div className="content" style={{ whiteSpace: 'nowrap' }}> {wind} km/h</div>
                    </div>
                </div>
                <div className="innerContainer">
                    <div className="left">
                        <Image src='/sun.svg' alt="Weather" className="infoSymbol" width={40} height={40}/>
                    </div>
                    <div className="right">
                        <div className="info">Sky Condition</div>
                        <div className="content"> {skyCondition}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
