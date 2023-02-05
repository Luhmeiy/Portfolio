// components
import { Navbar } from "./components";

// containers
import { About, Hero, Skills } from "./container";

// styles
import "./styles/global.scss";

function App() {
	return (
		<div className="flex flex-col items-center">
			<Navbar />
			<Hero />
			<About />
			<Skills />
		</div>
	);
}

export default App;
