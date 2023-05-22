import React, {useState} from 'react';
import './App.css';

function App() {

    type NumType = 0 |1 | 2 | 3 | 4 | 5

    let [num, setNum] = useState<NumType>(0)

    const onClickIncHandler = (num: NumType) => {
        if ( num < 5) {
            num += 1
        }
        setNum(num)
        console.log(num)
    }

    const onClickResHandler = (num: NumType) => {
        setNum(0)
    }

    return (

    <div className="App">
      <div className='wrapper'>
        <div className='counter'>{num}</div>
        <div className='button-wrapper'>
            <button className={num === 5 ? 'button disabled' : 'button'} onClick={() => onClickIncHandler(num)}>inc</button>
            <button className={num === 0 ? 'button disabled' : 'button'} onClick={() => onClickResHandler(num)}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
