import styles from "./ColorAdd.module.css"

export default () => (
    <div className={ styles.ColorAdd }>
        
        <label>
            <span>
                Name
            </span>
            <input type="text" name={ "name" } value={ "Color name" } />
        </label>

        <label>
            <span>
                Code
            </span>
            <input type="text" name={ "code" } value={ "Color code" } />
        </label>

        <button>
            Add
        </button>

    </div>
)