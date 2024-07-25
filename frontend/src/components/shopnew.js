import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Shopnew(){
    const [data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/getallproduts').then((res)=>{
        setData(res.data)
      })
    })
    
    return(
        <>
            <h1>New Products</h1>
            <div className="products-list">
            {
              data.map((ele,i)=>{
                return (
                  <div className="card" key={i}>
                    <img src={`http://localhost:5000/images/${ele.productpic}`} alt="" />
                    <p>{ele.name}</p>
                    <p>{ele.procedure}</p>
                    <p>{ele.category}</p>
                  </div>
                )
            })
          }
          </div>
            
        </>
    )
}
export default Shopnew