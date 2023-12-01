import colors from "@/data/fake/colors"

const PaletteColor = ({ name, code }) => (
    <div style={{
        height: "100%",
        flex: 1,
        backgroundColor: code,
        display: "grid",
        placeItems: "center"
    }}>
        { name }
    </div>
)

const ColorPalette = () => {

    const renderColors = colors.map( (c, i) => (
        <PaletteColor {...c} key={ "color_"+i }/>
    ))

    return (
        <div style={{
            width: "100vw",
            height: "10rem",
            display: "flex"
        }}>
            
            { renderColors }

        </div>
    )

}


export default ColorPalette