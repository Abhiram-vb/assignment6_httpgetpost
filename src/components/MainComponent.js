import axios from "axios"
import { useState } from "react"
import './MainComponent.css'
const MainComponent = () =>{
     const [title, settitle] = useState()
     const [body, setbody] = useState()
     const changeBody = (e) =>{
         setbody(e.target.value)
     }
     const changeTitle = (e) =>{
         settitle(e.target.value)
     }
     const  postTheData = async(e)=>{
         e.preventDefault()

         try {
            const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(data)
            const id = data.data.length+1
         const userId = parseInt(id/10)+1
          const newData = {userId:userId,id:id,title:title,body:body}
          const postData = await axios.post("https://jsonplaceholder.typicode.com/posts",newData)
          console.log(data,postData,newData)
          settitle("")
          setbody("")
          } catch (error) { 
            console.log(error)
          }
          
         
     }
    return(
        <div className="main">
            <form  className="form">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="enter title" onChange={changeTitle} value={title}/>
                <label htmlFor="body">Body</label>
                <input type="text" id="body" placeholder="enter body" onChange={changeBody} value={body}/>
                <button type="button" onClick={postTheData}>Post Data</button>
            </form>
        </div>
    )
}
export default MainComponent