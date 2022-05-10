import React, {useState} from "react";
import Nav from "./Nav";


function App() {
	const [selectedSort, setSelectedSort] = useState("original")
	const [filterGreased, setFilterGreased] = useState(false)
	
	return (
		<div className="App">
			<Nav />
			<Sort onSortChange={setSelectedSort}/>
			<Filter filterGreased={filterGreased} onfilterGreased={setFilterGreased}/>
			<HogList hogArray={hogs} filterGreased={filterGreased} selectedSort={selectedSort}/>
		</div>
	);
}

export default App;