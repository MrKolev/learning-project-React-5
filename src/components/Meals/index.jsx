import { Fragment } from "react"
import { AvailadleMeals } from "./AvailableMeals"
import { MealsSummary } from "./MealsSummary"


export const Mealis = () => {
    return(
        <Fragment>
            <MealsSummary/>
            <AvailadleMeals/>
        </Fragment>
    )

}