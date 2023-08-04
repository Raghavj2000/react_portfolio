import React from 'react'
import './home.css'
import character from '../../assets/charcter-removebg-preview.png'
import { FaBeer } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='home-screen'>
        <div className='home-screen-container'>
            <img src={character} className='img-character'/>
            <div className="hi-name">Hi! My name is <span className='quote-span'>Raghavendra J.</span></div>
            <div>I like to code.</div>
        </div>
       
    </div>
  )
}

export default Home