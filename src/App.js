import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
