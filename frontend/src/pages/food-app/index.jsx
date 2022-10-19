import React, {useState} from "react";
import Header from "../../components/Layout/Header";
import Meals from "../../components/FoodApp/Meals";
import Cart from "../../components/FoodApp/Cart/Cart";
import { FoodAppProvider } from "../../context/FoodAppContext";

const FoodApp= () => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }

    return (
        <FoodAppProvider>
        {showCart && <Cart hide={hideCartHandler} />}
        <Header showCart={showCartHandler}/>
        <main>
            <Meals />
        </main>
        </FoodAppProvider>
    )
};
export default FoodApp;