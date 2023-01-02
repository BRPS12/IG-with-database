import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Create = () => {
    const params = useParams();
    const id = params._id
    const [ desc , setDesc] = useState()
    const[ bgimage , setBgimage] = useState()
    const [ likes , setLikes] = useState()
    const idRef = useRef()

    const instance = axios.create({
        baseURL: "http://localhost:8000/",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      
    const postDesc = async () => {
        const res = await instance.post("/posts" , {
            desc : desc,
            bgimage: bgimage,
            likes : likes
        });
        console.log(res)
        
    } 

return (
      <div style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
        <input style={{width:200 , height : 25}}
       onChange={(e) => setDesc(e.target.value)}
       />Description
       <input style={{width:200 , height : 25}}
       onChange={(e) => setBgimage(e.target.value)}
       />Background Image
       <input style={{width:200 , height : 25}}
       type="number"
       onChange={(e) => setLikes(e.target.value)}
       />Likes
       
        <button 
       onClick={postDesc}
       >Post</button>
    </div>
)
}
export default Create