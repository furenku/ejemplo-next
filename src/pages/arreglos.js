import { useState } from "react"

import fakeColors from "../data/fake/colors"
import Color from "@/components/Colors/Color/Color"
import ColorAdd from "@/components/Colors/ColorAdd/ColorAdd"


export default () => {
    
    const [ color, setColor ] = useState( "#eee" )
    
    
    const [ colors, setColors ] = useState([
        ...fakeColors
    ])
    
    
    
    const changeColor = () => {
        
        setColor( "green" )
        
    }
    
    
    const renderColors = colors.map( (color, index) => (
        // <Color {...color}/>
        <Color
        key={ "color_" + index + "_" + color.name }
        name={ color.name }
        code={ color.code }
        select={ () => setColor( color.code )  }
        />
        ) )
        
        // let color = "lightcoral"
        
        
        return (
            <div style={{
                backgroundColor: color,
                width: "100vw",
                height: "100vh",
                display: "grid",
                gridTemplateColumns: "20rem 1fr"
            }}>
            
            <ColorAdd/>
            
            <div>
                <button onClick={ changeColor }>
                    Cambiar color
                </button>
                { renderColors }
            </div>
            
            </div>
            )
        }