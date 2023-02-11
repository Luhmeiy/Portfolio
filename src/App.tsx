// components
import { Navbar, SocialMedia } from "./components";

// containers
import { About, Contact, Hero, Skills, Work } from "./container";

// libraries
import "./i18n.ts";

// React
import { Suspense } from "react";

// styles
import "./styles/global.scss";

function App() {
	return (
		<div className="flex flex-col items-center mb-10">
			<Suspense fallback={null}>
				<Navbar />
				<Hero />
				<SocialMedia />
				<About />
				<Skills />
				<Work />
				<Contact />
			</Suspense>
		</div>
	);
}

export default App;
