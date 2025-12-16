import calculatorStyles from "./Calculator.module.css";
import Button from "../Button/Button.jsx";
import Display from "../Display/Display.jsx";
import {useState} from "react";

function Calculator() {
    const [expression, setExpression] = useState("")

    return <div className={calculatorStyles.calculatorContainer}>
        <Display expression={expression}/>

        {
            [
                "(", ")", "C", "←",
                "%", "xʸ", "1/x", "÷",
                "7", "8", "9", "x",
                "4", "5", "6", "-",
                "1", "2", "3", "+",
                "±", "0", ".", "="
            ].map((sign) =>
                <Button sign={sign} setExpression={setExpression}/>)
        }

    </div>
}

export default Calculator