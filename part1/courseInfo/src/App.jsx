const Header = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.total}</p>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part name={props.part1} number={props.ex1} />
            <Part name={props.part2} number={props.ex2} />
            <Part name={props.part3} number={props.ex3} />
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.name} {props.number}
            </p>

        </>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header name={course} />
            <Content part1={part1} ex1={exercises1} part2={part2} ex2={exercises2} part3={part3} ex3={exercises3} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App
