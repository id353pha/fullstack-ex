import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text={'Good'} />
            <Button handleClick={handleBadClick} text={'Bad'} />
            <Button handleClick={handleNeutralClick} text={'Neutral'} />
            <h1>statistics</h1>
            <p>Good: {good}</p>
            <p>Bad: {bad}</p>
            <p>Neutral: {neutral}</p>
        </div>
    )
}

export default App
