import { useInput } from '../../hook/use-input';
import styles from './Checkout.module.css';

export const Checkout = ({ onCancel, ocConfirm }) => {
    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangedHelper: nameValueChangedHelper,
        inputBlurHelper: nameInputBlurHelper
    } = useInput((value) => value.trim().length > 1);

    const {
        value: streetValue,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangedHelper: streetValueChangedHelper,
        inputBlurHelper: streetInputBlurHelper
    } = useInput((value) => value.trim().length > 4);

    const {
        value: postalValue,
        isValid: postalIsValid,
        hasError: postalHasError,
        valueChangedHelper: postalValueChangedHelper,
        inputBlurHelper: postalInputBlurHelper
    } = useInput((value) => value.trim().length > 1 && value.trim().length < 5);

    const {
        value: cityValue,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangedHelper: cityValueChangedHelper,
        inputBlurHelper: cityInputBlurHelper
    } = useInput((value) => value.trim().length > 2);

    const confirmHandler = (event) => {
        event.preventDefault();

        postalInputBlurHelper();
        nameInputBlurHelper();
        streetInputBlurHelper();
        cityInputBlurHelper();

        const formIsValide = nameIsValid && streetIsValid &&
            postalIsValid && cityIsValid

        if (!formIsValide) {
            return
        }


        ocConfirm({
            name: nameValue,
            street: streetValue,
            postal: postalValue,
            city: cityValue
        })
    };

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={nameHasError ? styles.controlInvalid : styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input
                    value={nameValue}
                    onChange={nameValueChangedHelper}
                    onBlur={nameInputBlurHelper}
                    type='text'
                    id='name' />
            </div>

            <div className={streetHasError ? styles.controlInvalid : styles.control}>
                <label htmlFor='street'>Street</label>
                <input
                    value={streetValue}
                    onChange={streetValueChangedHelper}
                    onBlur={streetInputBlurHelper}
                    type='text'
                    id='street' />
            </div>

            <div className={postalHasError ? styles.controlInvalid : styles.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input
                    value={postalValue}
                    onChange={postalValueChangedHelper}
                    onBlur={postalInputBlurHelper}
                    type='number'
                    id='postal' />
            </div>
            <div className={cityHasError ? styles.controlInvalid : styles.control}>
                <label htmlFor='city'>City</label>
                <input
                    type='text'
                    id='city'
                    value={cityValue}
                    onChange={cityValueChangedHelper}
                    onBlur={cityInputBlurHelper} />
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={onCancel}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
};