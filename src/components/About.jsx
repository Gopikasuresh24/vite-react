import React from 'react'
import {useState} from 'react'

function About(props) {

    const [name, setName]=useState("")

    function clickEvent(){
        setName("Click in About function")
        console.log("click event works...")
    }
    function inputChange(event){
        setName(event.target.value)
    }
    
  return (
    <div>About:<br></br>
        <b>Name:{props.name}</b> <br></br>
        <b>Work:{props.work}</b> <br></br>
        <b>username:{name}</b> <br></br>
        <input onChange={(event)=> inputChange(event)}/>
        <button onClick={()=>clickEvent()}>Click</button>

    </div>
  )
}

export default About