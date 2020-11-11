import React, { useState, useCallback, useMemo } from "react"

const functions = new Set()

const App = () => {
	const [count1, setCount1] = useState(0)
	const [count2, setCount2] = useState(0)

	const incrementCount1 = () => setCount1(count1 + 1)
	const incrementCount2 = () => setCount2(count2 + 1)

	const logName = useCallback(() => console.log("Yihua"), [])

	functions.add(logName)

	console.log(functions)

	return (
		<div className="App">
			<header className="App-header">
				Count1: {count1}
				<button onClick={incrementCount1}>Increase Count1</button>
				Count2: {count2}
				<button onClick={incrementCount2}>Increase Count2</button>
			</header>
		</div>
	)
}

export default App
