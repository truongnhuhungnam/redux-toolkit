import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    };
    const handleIncrementAmount = () => {
        dispatch(incrementByAmount(addValue));
        setIncrementAmount(0);
    };

    return (
        <div>
            <h1 className="text-center text-[30px] font-bold">Counter App With Redux Toolkit</h1>
            <p className="text-center text-[30px] mt-[20px]">{count}</p>
            <div className="flex justify-around mt-[35px]">
                <button
                    onClick={() => dispatch(increment())}
                    className="btn-primary"
                >
                    +
                </button>
                <button onClick={resetAll} className="btn-primary">
                    Reset
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="btn-primary"
                >
                    -
                </button>
            </div>
            <div className="flex justify-center mt-[35px]">
                <input
                    type="text"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button onClick={handleIncrementAmount} className="btn-primary">
                    Add amount
                </button>
            </div>
        </div>
    );
};
export default Counter;
