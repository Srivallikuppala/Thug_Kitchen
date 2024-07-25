import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Getdata(){
  const [showModal,setShowModal] = useState(false);
  const handleClick = () =>{
    setShowModal(!showModal);
  }
  // const iconClick=(e)=>{
  //   e.preventDefault();
  //   if(e.target.classList.contains('favourite-btn')){
  //     if(e.target.classList.contains('is-favourite')){
  //       e.target.classList.remove('is-favourite');
  //       e.target.style.color='deepskyblue';
  //       console.log('yes')
  //     }
  //     else{
  //       e.target.classList.add('is-favourite');
  //       e.target.style.color='red';
  //       console.log('No')
  //     }
  //   }
    const [data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/getallpro').then((res)=>{
        setData(res.data)
      })
    })
    
    return(
      <div className="pad">
        <div><h1>Added Recipes</h1></div>
        <>
            <div className="products-list">
            {
              data.map((ele,i)=>{
                return (
                  <div>
                  {/* <div className="card lg" key={i}>
                    <img src={`http://localhost:5000/images/${ele.productpic}`} alt="" />
                    <center><h2>{ele.name}</h2></center>
                    <h3>Procedure</h3>
                    <p>{ele.procedure}</p>
                    <h3>Category</h3><p>{ele.category}</p>
                    <h3>Area</h3><p>{ele.area}</p>
                  </div> */}
                  <div>
                    <div className="bg-white shadow-md mt-6 md:w-full w-full text-lg rounded-lg z-[-1]">
                    <div className="food object-contain">
                      <img src={`http://localhost:5000/images/${ele.productpic}`} alt="" className="rounded-t-lg"/>
                    </div>
                    <br/><br/>
                    <div className="pl-10">
                      <h4>{ele.name}</h4>
                      <p className="text-sm text-gray-400">
                      {ele.category} | {ele.area}
                      </p>
                    </div>
                    <div>
                      <div className="pb-2 flex justify-end text-sm md:text-lg">
                      {/* <button onClick={iconClick} className="favourite-btn btn btn-outline-info ">
                        <ion-icon name="heart"></ion-icon>
                      </button> */}
                        <button onClick={handleClick} className="bshadow-lg p-2 m-2  hover:bg-neutral-300 rounded-md">Recipe</button>
                        {/* <a href={youtube} className="shadow-lg p-2 m-2 hover:bg-neutral-300 rounded-md" rel="noopener noreferrer" target="_blank" >Watch Video</a> */}
                      </div>
                    </div>
                  </div>
                  {showModal ?
                    (
                      <div className=" fixed inset-0 z-50 overflow-x-hidden overflow-y-auto  items-center">
                      <div className="md:w-2/3 mt-24 md:mx-64 w-4/5 bg-white p-2 w-screen rounded-lg">
                        <div className="flex justify-center mt-4">
                          <img src={ele.productpic} alt="" className="rounded-full object-cover w-3/12 "/>
                        </div>
                        <div className="py-6 m-2">
                          <h2 className="text-center">{ele.name}</h2>
                          <h2>Instructions:</h2>
                          <p className="text-center text-sm px-2 mt-2">
                          {ele.procedure}
                          </p>
                          <div class="flex justify-end mt-4">
                            {/* <a href ={youtube} className="shadow-lg p-2 rounded-md text-md m-2 hover:bg-neutral-300" rel="noopener noreferrer" target="_blank">Watch video</a> */}
                            <button onClick={handleClick} className="hover:bg-neutral-300 shadow-lg p-2 rounded-md text-md m-2">Close</button>
                          </div>
                        </div>
                      </div>
                      </div>
                    ): null}
                  </div>
                  </div>
                )
            })
          }
          </div>
            
        </>
        </div>
        
        
    )
}
export default Getdata;