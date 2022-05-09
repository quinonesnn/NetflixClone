import React, { useState, useEffect } from 'react'
import axios from '../axios';
import requests from "../request";
import "../style/Banner.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            )
        }
        fetchData()
    }, []);

    //Reduces the size of the description paragraph if too long and adds "..."
    function trunacate(str, n){
        return str?.lengh > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner_content'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className='banner_description'>{trunacate(movie?.overview, 100)}</h1>
            </div>
            <div className='banner_fadebottom'></div>
        </header>
    )
}

export default Banner

