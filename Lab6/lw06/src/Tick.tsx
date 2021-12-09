import React, {useState} from 'react';

interface Props {
  time: string;
}

function Tick(props: Props) {

  const [ timer, setTime ] = useState<string>(props.time);
  return (
    <h3>Время:   {timer}
        <button onClick={() => {
                setTime(new Date().toLocaleTimeString());
            }}>update</button>
    </h3>

  );
}

export default Tick;