import React, {useContext}  from "react";
import ThemeContext from "../context/ThemeContext"

const ThemeToggler = ()=>{
     const [mode, setMode] = useContext(ThemeContext)

     return(
         <div
          onClick = {() => { 
               setMode(mode === "light" ? "dark" : "light")
          }}
         >
           <span>{mode === "light" ?"Turn Dark" : " Lights onn"}</span>
         </div>
   
     )
}

export default ThemeToggler;