// components
import { Navbar, SocialMedia } from "./components";

// containers
import { About, Contact, Hero, Skills, Work } from "./container";

// styles
import "./styles/global.scss";

function App() {
	return (
		<div className="flex flex-col items-center">
			<Navbar />
			<Hero />
			<SocialMedia />
			<About />
			<Skills />
			<Work />
			<Contact />
		</div>
	);
}

export default App;
