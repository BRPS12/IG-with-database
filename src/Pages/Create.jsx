import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Create = () => {
    const params = useParams();
    const id = params._id
    const [ value , setValue] = useState()
    const idRef = useRef()
    console.log(value)
    const instance = axios.create({
        baseURL: "http://localhost:8000/",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      
    const postFirstName = async () => {
        const res = await instance.post("/posts" , {
            title : value
        });
        console.log(res)
        
    } 
    const postDelete = async ()=> {
        const res = await instance.delete(`/posts/${idRef.current}`)
        console.log(res)
    } 
return (
      <div>
       <center> 
        <input 
       onChange={(e) => setValue(e.target.value)}
       /> <button 
       onClick={postFirstName}
       >Post</button>
       <input onChange={(e) => idRef.current = e.target.value}/>
       <button onClick={postDelete}>Delete</button>
       </center>
    </div>
)
}
export default Create