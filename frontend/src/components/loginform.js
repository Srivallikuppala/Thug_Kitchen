import { useState, useEffect } from "react";
import axios from "axios";
import './marquee.css';
import Frontfooter from './Frontfooter';

const Loginform = () => {
    const [logindata, setFormdata] = useState({
        'email': '',
        'password' :''
    });

    const [logindetails, setLogindata] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/getstuden')
            .then((response) => {
                setLogindata(response.data.logindata);
                // Move the setting of json inside the useEffect
                const json = response.data.logindata;
                // Now you can access json within the useEffect scope
            })
            .catch((error) => {
                console.error('Error fetching login data:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(logindata)
        let x = 0;
        let json; // Declare json outside the loop
        for(let key in logindetails){
            console.log(logindetails[key].email)
            console.log(logindetails[key].password)
           
            if(logindata.email === logindetails[key].email && logindata.password === logindetails[key].password){
                x = 1;
                json = logindetails[key]; // Set json here
                break;
            }
        }
        if (x === 0){
            localStorage.setItem("userEmail", logindata.email)
            // Move this line here and access json within the scope
            localStorage.setItem("token", json?.authToken)
            alert('Details Not Found')
        } else {
            alert("Loggedin")
            window.location = "http://localhost:3000/home"
        }
    }

    return (
        <div>
            <div  className="w-full font-bold text-4xl cursor-pointer font-[Poppins] absolute  flex items-center ustify-center z-[-1] bg-[url('https://cdn.wallpapersafari.com/1/78/kt0qwH.jpg')] h-4/5 bg-center bg-cover">
                <form onSubmit={handleSubmit} style={{paddingLeft:"300px",paddingTop:"50px",paddingBottom:"20px",color:"white"}}>
                <h1 className='test-skyblue-800 text-5xl'style={{color:"white",paddingLeft:"150px"}}>
                Login Form
                </h1>
                <br/>   
                    <label>Email:</label>
                    <input style={{color:'black' , paddingRight:"50px"}} type="text" name='email' onChange={(e)=>setFormdata({...logindata,email:e.target.value})} />
                    <br /><br/>
                    <label>Password:</label>
                    <input style={{color:'black'}} type="password" name='password' onChange={(e)=>setFormdata({...logindata,password:e.target.value})} />
                    <br /><br/>
                    <input className='text-white-800 hover:text-gray-400' type="submit" value="Submit" style={{paddingLeft:'150px',paddingRight:'10px'}}/>
                    <a className="text-white-800 hover:text-gray-400 duration-500 cursor-pointer"
                    href="http://localhost:3000/registrationform">Register</a>
                </form>
            </div>
            <Frontfooter />
        </div>
    )
}

export default Loginform;
