const Color = ({ name, code, select }) => (
    <div
        onClick={ select }
        style={{ border: "1px solid grey" }}
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

export default Color