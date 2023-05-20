import { useState } from "react";

export const useInput = (validateValue) => {
    
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched;

    const valueChangedHelper = (e) => {
        setEnteredValue(e.target.value);
    }

    const inputBlurHelper = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangedHelper,
        inputBlurHelper,
        reset
    }
}