import { OPTION_SHEET } from "../dummy-meals";
import { Input } from '../../UI/Input'

export const OptionSheet = ({id}) => {
    return (
        <div>
            <ul>
                {OPTION_SHEET.map((option, index) => {
                    return <li key={index}>
                        <Input label={option} input={{
                            id: `amount_${id}`,
                            type: 'checkbox',
                        }} />
                    </li>
                })}
            </ul>
        </div>
    )
}