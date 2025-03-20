import React from 'react'
import '../css/Feed.css';
import post1 from '../assets/img1.jpeg'
import post2 from '../assets/img2.jpeg'
import post3 from '../assets/img3.jpeg'
import post4 from '../assets/img4.jpeg'
import post5 from '../assets/img5.jpeg'
import post6 from '../assets/img6.jpeg'
import post7 from '../assets/img7.jpeg'
import post8 from '../assets/img8.jpeg'
import post9 from '../assets/img9.jpeg'

const Feed = () => {
  return (
    <>
    <div>
        <a href="#"><img className='posts' src={post1} alt="Post" /></a>
        <a href="#"><img className='posts' src={post2} alt="Post" /></a>
        <a href="#"><img className='posts' src={post3} alt="Post" /></a>
        <a href="#"><img className='posts' src={post4} alt="Post" /></a>
        <a href="#"><img className='posts' src={post5} alt="Post" /></a>
        <a href="#"><img className='posts' src={post7} alt="Post" /></a>
        <a href="#"><img className='posts' src={post6} alt="Post" /></a>
        <a href="#"><img className='posts' src={post8} alt="Post" /></a>
        <a href="#"><img className='posts' src={post9} alt="Post" /></a>
    </div>
    </>
  )
}

export default Feed
