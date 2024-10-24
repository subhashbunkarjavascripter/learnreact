import { useDispatch, useSelector } from "react-redux";
import { increment, decrement,multiply } from "./store/reducers/counterSlice";
import { asyncdecrement } from "./store/actions/counterActon";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    const IncrementHandler = () => {
        //call action | value + 1
        dispatch(increment(value + 1));
    };
    const DecrementHandler = () =>{
        dispatch(asyncdecrement(value - 1));
    };
    const MultiplyHandler = () => {
        dispatch(multiply(value * 2));
    };
    return (
        <div className="w-[80%] mx-auto my-10 p-10 rounded bg-zinc-200">
            <h1 className="mb-5 text-5xl font-extrabold">{value}</h1>
            <button
                onClick={IncrementHandler}
                className="mr-5 px-4 py-2 rounded bg-green-300"
            >
                Increment By 1
            </button>
        
            <button onClick={MultiplyHandler} className="px-4 py-2 mr-4 rounded bg-blue-300">
                Multiply By 2
            </button>

            <button onClick={DecrementHandler} className="px-4 py-2 rounded bg-red-300">
                Decrement By 1
            </button>
        </div>
    );
};

export default App;