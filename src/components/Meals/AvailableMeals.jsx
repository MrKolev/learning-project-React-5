import { DUMMY_MEALS } from "./dummy-meals"
import styles from "./AvailableMeals.module.css";
import { Card } from "../UI/Card";
import { MealsItem } from "./MealsItem/MealsItem";

export const AvailadleMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
        <MealsItem
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            key={meal.id}
        />
    ));

    return <section className={styles.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>

}