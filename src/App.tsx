// components
import { Navbar } from "./components";

// containers
import { Hero } from "./container";

// styles
import "./styles/global.scss";

function App() {
	return (
		<div className="flex flex-col items-center">
			<Navbar />
			<Hero />
		</div>
	);
}

export default App;
