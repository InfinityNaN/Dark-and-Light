import React, {useContext} from "react"
import ThemeContext from "../context/ThemeContext"
import AppTheme from "../color"

const HeroSection = ()=>{
     const theme = useContext(ThemeContext)[0] // current theme
     const currentTheme = AppTheme[theme]

     return(
          <div
            style={{
                 padding: "5px",
                 backgroundColor: `${currentTheme.backgroundColor}`,
               //   color: "white",
                 textAlign: "center"
            }}
          >

               <h1>Context API theme toggler</h1>
               <p>This is a nice Paragraph</p>
               <button
               style={{ 
                   backgroundColor: "crimson",
                   padding: "5px",
                   fontSize: "16px",
                   color: "white",
                   border: `${currentTheme.border}`
               }}
               
               >Change Mode</button>

          </div>
     )
}

export default HeroSection;