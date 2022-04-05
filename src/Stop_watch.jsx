import React, { useState } from 'react'


let countIntervel = undefined;
const Stop_watch = () => {
    const [count, setCount] = useState(0);
    const [button, setbutton] = useState(false);
    const _hanldStart = () => {
        console.log('Working.');
        countIntervel = setInterval(() => {
            setCount((x) => x + 1)
        }, 1000)
        setbutton(true)
    }
    const _hanldStop = () => {
        console.log('Working.');
        clearInterval(countIntervel)
        setbutton(false)

    }
    const _hanldReset = () => {
        console.log('Working.');
        setCount(0);
        clearInterval(countIntervel)
        setbutton(false)


    }



    return (
        <>
            <h1 >Start , Stop, Reset Count</h1>
            <h1 >  Count {count}  </h1>
            <button disabled={button} className='start' onClick={() => _hanldStart()} > Start Count</button>
            <button disabled={button ? false : true} className='stop ' onClick={() => _hanldStop()} > Stop Count</button>


            <button className='reset' onClick={() => _hanldReset()} > Reset Count</button>

        </>
    )
}

export default Stop_watch