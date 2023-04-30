import { useRef, useState } from 'react'
import { Input } from '../../UI/Input'
import styles from './MealItemForm.module.css'
// import { OptionSheets } from './OptionSheet'
import { OPTION_SHEET } from '../dummy-meals'

export const MealItemForm = ({ id , onAddToCart}) => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const enteredAmout = amountRef.current.value;
        const enteredAmoutNumber = +enteredAmout;

        if (
            enteredAmout.trim().length === 0 ||
            enteredAmoutNumber < 1 ||
            enteredAmoutNumber > 5
        ) {
            setAmountIsValid(false);
            return
        }
        
        setAmountIsValid(true);

        onAddToCart(enteredAmoutNumber);

    }

    return <form className={styles.form} onSubmit={onSubmit} >
        <div>
            <ul>
                {OPTION_SHEET.map((option, index) => {
                    return <li key={index}>
                        <Input
                            label={option}
                            input={
                                {
                                    id: `amount_${id}`,
                                    type: 'checkbox',
                                    value: option
                                }
                            }
                        />
                    </li>
                })}
            </ul>
        </div>
        <div>
            <Input
                ref={amountRef}
                label="Amount"
                input={{
                    id: `amount_${id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
        </div>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
}