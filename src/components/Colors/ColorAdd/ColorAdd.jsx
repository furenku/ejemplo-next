import { useState } from "react"

import styles from "./ColorAdd.module.css"

export default ({ add }) => {

    const [name, setName] = useState("Mi color")
    const [code, setCode] = useState("#FFF")

    const changeName = ( event ) => {
        const newName = event.target.value
        setName( newName )
    }
    const changeCode = ( event ) => {
        const newCode = event.target.value
        setCode( newCode )
    }

    const doAdd = () => {
        if( add ) {
            add({ name, code })
        }
    }


    return (
        <div className={ styles.ColorAdd }>
            
            <label>
                <span>
                    Name
                </span>
                <input type="text" name={ "name" } value={ name } onChange={ changeName }/>
            </label>
    
            <label>
                <span>
                    Code
                </span>
                <input type="text" name={ "code" } value={ code } onChange={ changeCode }/>
            </label>
    
            <button onClick={ doAdd } disabled={ ! add }>
                Add
            </button>
    
        </div>
    )

}