// libraries
import { motion, useInView } from "framer-motion";

// React
import { useRef } from "react";

const icons = [
	"devicon-typescript-plain bg-blue-50",
	"devicon-sass-original bg-pink-50",
	"devicon-html5-plain bg-gray-100",
	"devicon-react-original bg-blue-50",
	"devicon-tailwindcss-plain bg-blue-50",
	"devicon-javascript-plain bg-gray-100",
	"devicon-nodejs-plain bg-green-50",
	"devicon-css3-plain bg-blue-50",
	"devicon-git-plain bg-orange-50",
];
const languages = [
	"TypeScript",
	"Sass",
	"HTML5",
	"React",
	"Tailwind",
	"JavaScript",
	"Node.js",
	"CSS",
	"Git",
];

const Skills = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			className="w-full min-h-screen flex flex-col justify-center items-center py-10"
			id="skills"
		>
			<motion.div
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				className={`w-full max-w-6xl grid grid-cols-2 justify-center relative translate-y-52 ${
					isInView ? "translate-y-0" : ""
				} transition-all duration-[.75s] ease-in-out [@media(max-width:1152px)]:px-4 max-tablet:grid-cols-1`}
				ref={ref}
			>
				<div className="grid grid-cols-4 justify-center items-center gap-y-8 max-tablet:grid-cols-3 max-tablet:row-start-2">
					{icons.map((icon, i) => (
						<div
							key={`link-${languages[i]}`}
							className="flex flex-col items-center"
						>
							<i
								className={`${icon} colored text-5xl rounded-full p-6 mb-3`}
							></i>
							<p className="text-gray-500">{languages[i]}</p>
						</div>
					))}
				</div>

				<h1 className="text-7xl font-bold mb-10 flex flex-col text-center [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px] [-webkit-text-stroke-color:gray] before:content-['Skills'] before:[-webkit-text-fill-color:black] before:[-webkit-text-stroke-color:black] after:content-['Skills'] after:[-webkit-text-stroke-color:lightgray]">
					Skills
				</h1>
			</motion.div>
		</div>
	);
};

export default Skills;
