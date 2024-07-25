import { useState } from "react";
import axios from "axios";
import '../App.css';
function Form(){
    const[form3data,setFormdata]=useState({
        'name':'',
        'procedure':'',
        'productpic':'',
        'category':'',
        'area':''
    })
    console.log(form3data);
    let backend_api="http://localhost:5000/addrecipes"
    const handlesubmit=(e)=>{
        const Inputfields=new FormData()
        Inputfields.append('myfile',form3data.productpic)
        Inputfields.append('name',form3data.title)
        Inputfields.append('procedure',form3data.procedure)
        Inputfields.append('category',form3data.category)
        Inputfields.append('area',form3data.area)
        e.preventDefault();
        axios.post(backend_api,Inputfields).then((res)=>{
            if(res.status===200){
                
                console.log(res)
                alert("success")
            }
        })
        
    }
    return(
        <div>
            <form onSubmit={handlesubmit} action="post">
                <br/>
                <center><h1>Recipe</h1></center>
            <label>Title: </label>
                <input className="in" type="text"  name="title" value={form3data.title} onChange={(e)=>setFormdata({...form3data,title:e.target.value})}/>
                <br/><br/>
                <label>Procedure: </label>
                <input className="in" type="text"  name="procedure" value={form3data.procedure} onChange={(e)=>setFormdata({...form3data,procedure:e.target.value})}/>
                <br/><br/>
                <label>Upload: </label>
                <input  type="file"  name="myfile"   onChange={(e)=>setFormdata({...form3data,productpic:e.target.files[0]})}/>
                <br/><br/>
                <label>Category:</label>
                <input  className='in' type="text"  name="category"   value={form3data.category} onChange={(e)=>setFormdata({...form3data,category:e.target.value})}/>
                <br/><br/>
                <label>Area:</label>
                <input  className='in' type="text"  name="area"   value={form3data.area} onChange={(e)=>setFormdata({...form3data,area:e.target.value})}/>
                <br/><br/>
                <center><input type="submit" value="Submit"/></center>
            </form>
        </div>
    )
}
export default Form;