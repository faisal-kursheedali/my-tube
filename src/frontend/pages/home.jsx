import React from 'react'
import { VideoListing } from '../components/import';
import { useData } from '../context/dataContext'


const Home = () => {
  const {vdoList}=useData();
  console.log(vdoList);
  return (
   <>
   <VideoListing data={vdoList}/>
   </>

  )
}

export default Home