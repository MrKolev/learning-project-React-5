import { Input } from '../../UI/Input'
import styles from './MealItemForm.module.css'
import { OptionSheet } from './OptionSheet'

export const MealItemForm = ({ id }) => {

    return <form className={styles.form}>
        <OptionSheet id={id}/>
        <div>
            <Input label="Amount" input={{
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
    </form>
}