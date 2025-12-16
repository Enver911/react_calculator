import displayStyles from "./Display.module.css"

function Display({expression}) {
    return <div className={displayStyles.displayContainer}>
        {expression}
    </div>
}

export default Display