import displayStyles from "./Display.module.css"
import ThemeChanger from "../ThemeChanger/ThemeChanger.jsx";

function Display({expression}) {
    return <div className={displayStyles.displayWindowContainer}>
        <ThemeChanger/>
        <div className={displayStyles.displayContainer}>
            {expression}
        </div>
    </div>


}

export default Display