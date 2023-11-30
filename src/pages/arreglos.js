import { useState, useEffect } from "react"

import fakeColors from "../data/fake/colors"

import Color from "@/components/Colors/Color/Color"
import ColorAdd from "@/components/Colors/ColorAdd/ColorAdd"


export default () => {
    
    const [ backgroundColor, setBackgroundColor ] = useState( "#eee" )
    
    
    const [ colors, setColors ] = useState([
        ...fakeColors
    ])
    


    
    const changeColor = () => {
        
        setBackgroundColor( "green" )
        
    }
    

    const addColor = ( newColor ) => {

        const newColors = [
            ...colors,
            newColor
        ]

        setColors( newColors )

    }


    
    const renderColors = colors.map( (color, index) => (
        // <Color {...color}/>
        <Color
            key={ "color_" + index }
            name={ color.name }
            code={ color.code }
            select={ () => setBackgroundColor( color.code )  }
        />
    ))
        

        // let color = "lightcoral"
        
        
        return (
            <div style={{
                backgroundColor,
                width: "100vw",
                height: "100vh",
                display: "grid",
                gridTemplateColumns: "20rem 1fr"
            }}>
                
                <ColorAdd add={ addColor }/>
                
                <div>
                    <button onClick={ changeColor }>
                        Cambiar color
                    </button>


                    <div className="colors" style={{border: "1px solid grey"}}>
                        { renderColors }
                    </div>

                </div>
            
            </div>
        )
}