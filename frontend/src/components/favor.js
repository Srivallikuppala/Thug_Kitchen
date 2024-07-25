import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Favor = () => {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //   axios.get('http://localhost:5000/getallpro').then((res)=>{
    //     setData(res.data)
    //   })
    // })
    const [favordata, setFavor] = useState([]);

    useEffect(() => {//to get data from backend to front end
        axios.get('http://localhost:5000/getfav').then((res) => {
            setFavor(res.data);
        })
    }, []);
    
    return (
    <div>
      <br />
      <h1>Favorites</h1>
      <table align="center" border={1}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Procedure</th>
          </tr>
        </thead>
        <tbody>
          {
            // data.map((ele,i)=>{
            //     return (
            //       <tr className="card lg" key={i}>
            //         <td><img src={`http://localhost:5000/images/${ele.productpic}`} alt="" /></td>
            //         <td><center><h1>{ele.name}</h1></center></td>
            //         <td><h3>Procedure</h3>

            //         <p>{ele.procedure}</p></td>
            //       </tr>
            //     )
            // })
          favordata.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.procedure}</td>
              </tr>
            );
          })
          }
         
        </tbody>
      </table>
    </div>
  );
//   let [favorsdata, setFavor] = useState([]);

//   useEffect(() => {//to get data from backend to front end
//     axios.get('http://localhost:5000/getfav').then((res) => {
//         setFavor(res.favorsdata);
//       })
//   }, []); // Empty dependency array means this effect will run once after the initial render
// //     const Deletestu = (id)=>{
// //       axios.delete('http://localhost:5000/deleteuser/'+id)
// //       .then(res=>{console.log(res)
// //       alert(res.data.message)
// //     window.location.reload()
// //   })

};

export default Favor;