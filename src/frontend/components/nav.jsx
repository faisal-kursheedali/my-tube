import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <>
    <Link to={"/"} >Home</Link>
    <Link to={"/like"}>Like</Link>
    <Link to={"/watchlater"}>watch later</Link>
    <Link to={"/login"}>login</Link>
    </>
  )
}

export default Nav