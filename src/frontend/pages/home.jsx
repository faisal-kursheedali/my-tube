// import axios from 'axios';
import React from 'react'
import { VideoListing } from '../components/import';
import { useData } from '../context/dataContext'


const Home = () => {
  const {vdoList}=useData();
  return (
   <>
   <VideoListing data={vdoList}/>
   </>

  )
}

export default Home