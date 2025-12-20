import buttonStyles from "./Button.module.css"
import {evaluate} from 'mathjs';

function Button({sign, setExpression}) {

    const buttonClickHandler = () => {

        switch (sign) {
            case 'C':
                setExpression('');
                break;
            case '±':
                setExpression((prevValue) => {
                    let match = prevValue.match(/^-\((.*)\)$/);

                    if (match)
                        return match[1];


                    match = prevValue.match(/^-(.*)$/);
                    if (match)
                        return match[1];

                    match = prevValue.match(/^\((.*)\)$/);
                    if (match)
                        return '-' + match[1];

                    match = prevValue.match(/^.*$/);
                    if (match)
                        return '-' + '(' + match[0] + ')';

                    return prevValue;
                });
                break;
            case '%':
                setExpression((prevValue) => prevValue + ' mod ');
                break;
            case 'xʸ':
                setExpression((prevValue) => prevValue + '^');
                break;
            case '1/x':
                setExpression((prevValue) => prevValue ? '1/' + '(' + prevValue + ')' : '');
                break;
            case 'x':
                setExpression((prevValue) => prevValue + '*');
                break;
            case '÷':
                setExpression((prevValue) => prevValue + '/');
                break;
            case '←':
                setExpression((prevValue) => {
                    prevValue = prevValue.trim();
                    return prevValue.trim().slice(0, prevValue.length - 1);
                });
                break;
            case '=':
                setExpression((prevValue) => {

                    try {
                        const result = evaluate(prevValue);
                        return result ? `${result}` : '';
                    } catch {
                        return '';
                    }

                });
                break;
            default:
                setExpression((prevValue) => prevValue + sign);
        }


    };

    return <button onClick={buttonClickHandler} className={buttonStyles.buttonContainer}>{sign}</button>
}

export default Button