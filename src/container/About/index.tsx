// libraries
import { motion, useInView } from "framer-motion";

// React
import { useRef } from "react";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			className="w-full min-h-screen bg-white flex justify-center items-center"
			id="about"
		>
			<motion.div
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				className={`w-full max-w-6xl grid grid-cols-2 justify-center relative translate-y-52 ${
					isInView ? "translate-y-0" : ""
				} transition-all duration-[.75s] ease-in-out [@media(max-width:1152px)]:px-4 max-tablet:grid-cols-1`}
				ref={ref}
			>
				<h1 className="text-7xl font-bold mb-10 flex flex-col text-center [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px] [-webkit-text-stroke-color:gray] before:content-['About_Me'] before:[-webkit-text-fill-color:black] before:[-webkit-text-stroke-color:black] after:content-['About_Me'] after:[-webkit-text-stroke-color:lightgray]">
					About Me
				</h1>

				<div className="max-w-xl text-xl text-gray-500 indent-10">
					<p className="mb-5">
						I'm a passionate full stack web developer based in
						Brazil, interested in bringing creative and unique
						projects to life with the skills I'm quickly developing.
					</p>
					<p className="mb-5">
						Doesn't matter the difficulty:{" "}
						<span className="font-bold">I'll take it</span>. I love
						the thrill of the possibility of learning and improving
						my knowledge.
					</p>
					<p>
						I'm also a writer and an avid enjoyer of 80s "so bad,
						it's good" fantasy/sci-fi movies.
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default About;
