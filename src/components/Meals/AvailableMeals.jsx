import styles from "./AvailableMeals.module.css";
import { Card } from "../UI/Card";
import { MealsItem } from "./MealsItem/MealsItem";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../Spinner/LoadingSpinner";
import { errorsImg } from "../../img";

export const AvailadleMeals = () => {
    const [menu, setMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState();

    useEffect(() => {
        fetch('https://react-http-640f4-default-rtdb.europe-west1.firebasedatabase.app/menu.json')
            .then((data) => {
                if (!data.ok) {
                    throw new Error(data.status)
                }
                data.json()
                    .then((data) => {
                        let loadedData = [];
                        for (const key in data) {
                            loadedData.push({
                                id: key,
                                name: data[key].name,
                                description: data[key].description,
                                price: data[key].price
                            })
                        }
                        setMenu(loadedData);
                        setTimeout(() => {
                            setIsLoading(false);
                        }, 1000);

                    }
                    )
            }
            )
            .catch((err) => {
                console.log(err.message);
                setHasError(err.message)
            })
    }, [])

    if (hasError) {

        return <img className={styles.err} src={errorsImg}></img>
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    const mealsList = menu.map(meal => (
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