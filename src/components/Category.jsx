import React, { useState } from 'react'
import Nav from './Nav'
import AllData from './Data'
function Category() {
  let [data , setData] =useState(AllData)
  let [inputVal , setInputVal] = useState()
  if(inputVal == "Product A to Z"){
    data.sort((a,b)=>{
      let nameA = a.name
      let nameB = b.name
      if(nameA < nameB){
        console.log(nameA);
        console.log(nameB);
        return -1
      }
    })
  }
  if(inputVal == "Product Z to A"){
    data.sort((a,b)=>{
      let nameA = a.name
      let nameB = b.name
      if(nameA > nameB){
        console.log(nameA);
        console.log(nameB);
        return -1
      }
    })
  }
  if(inputVal == "Price High to Low"){
    data.sort((a,b)=>{
      let priceA = a.price
      let priceB = b.price
      return priceB - priceA
     
      
    })
  }
  if(inputVal == "Price Low to High"){
    data.sort((a,b)=>{
      let priceA = a.price
      let priceB = b.price
      return priceA - priceB
     
      
    })
  }

  return (
   <>
     <div className="container">
      <Nav/>
        <div className="category">
          <h2 style={{color : "white"}}>Category</h2>
          <select name="" id="" onChange={(e)=>setInputVal(e.target.value)}>
            <option value="Product A to Z">Product A to Z</option>
            <option value="Product Z to A">Product Z to A</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Price Low to High">Price Low to High</option>
          </select>
        </div>
        <div className="product">
          {
            data.map((curr ,index)=>{
              return(
                <div className="card" key={index}>
                  <img src={curr.image} alt="" />
                  <div className="text">
                    <h2>Name : {curr.name}</h2>
                    <h2>Price : {curr.price}</h2>
                    <p><mark>Description:</mark>{curr.description}</p>
                    <button>{curr.button}</button>
                  </div>
                </div>
              )
            })
          }
        </div>
     </div>
   </>
  )
}

export default Category