import React, {useState} from 'react';

interface Props {
    initialValue: number;
    step?: number;
}

function Counter(props: Props) {
    const [ currentValue, setCurrentValue ] = useState<number>(props.initialValue);
    return (
        <div>
        <h3>Стипендия: {props.initialValue}, бонус: {props.step ?? 1}</h3>
        <h3>
            <button onClick={() => {
                setCurrentValue(currentValue - (props.step ?? 1));
            }}>—</button>
            С прибавкой: {currentValue}
            <button onClick={() => {
                setCurrentValue(currentValue + (props.step ?? 1));
            }}>+</button>
        </h3>
        </div>
    );
}

export default Counter;