import React from 'react'
import "./catagory.css"
const Catagory = () => {
    const catagoryArr=["comedy","song","Game","movie","react","redux","java script","html","css","bootstrap"]
  return (
    <div className="catagory-container">
        <ul className="catagory-list">
            {/* <li className="catagory-list-item">redux</li> */}
            {
                catagoryArr.map((item,index)=>{
                    return(
                   <li className="catagory-list-item" key={index} >{item}</li>)
                })
            }
        </ul>
    </div>
  )
}

export default Catagory