import React, {useState} from 'react';

const App=()=> {
  const [count, setCount] = useState(0)

  const increment =()=>setCount(count+1)
  const decrement =()=>setCount(count-1)

  const reset =()=>setCount(0)
  const double =()=>setCount(count*2)
  const divide3 =()=>setCount(previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
    // if(previousCount % 3 === 0){
    //   return previousCount / 3
    // }else{
    //   return previousCount
    // }
  )

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>



      <button onClick={reset}>Reset</button>
      <button onClick={double}>x2</button>
      <button onClick={divide3}>3の倍数の時だけ3割る</button>








    </>
  );
}

export default App;
