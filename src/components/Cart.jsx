import { useEffect } from "react";
import axios from "../utils/axios";

const Cart = () => {
    const getcarts = async () => {
        try {
            const { data } = await axios.get("/carts"); // Ensure this endpoint exists
            console.log(data);
        } catch (error) {
            // Log more details about the error
            console.error("Error fetching carts:", error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        getcarts();
    }, []);

    return (
        <div>
            <h1>Cart</h1>
            <button
                className="mt-10 px-4 py-2 rounded bg-red-200"
                onClick={getcarts}
            >
                Get Carts
            </button>
        </div>
    );
};

export default Cart;
