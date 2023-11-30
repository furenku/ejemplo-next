import styles from "./Color.module.css"


const Color = ({
    name,
    code,
    select
}) => {


    // ....
    const estilosOrilla = {
        border: "1px solid grey"
    }


    return (
        <div
            className={ styles.Color }
            onClick={ select }
            style={ estilosOrilla }
        >
            <div>
                { name }
            </div>
            <div
                style={{
                    width: 20,
                    height: 20,
                    backgroundColor: code
                    
                }}
            ></div>
        </div>
    )


}

export default Color