import { motion } from "framer-motion";
import { PaperPlaneRight } from "phosphor-react";

const Hero = () => {
	return (
		<div className="w-full max-w-6xl h-screen flex items-center [@media(max-width:1152px)]:px-4">
			<motion.div
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.75, ease: "easeInOut" }}
				className="opacity-0"
			>
				<span className="text-3xl text-gray-700 font-bold">
					Hello there, I'm
				</span>
				<h1 className="text-secondary text-8xl font-bold mb-5 max-tablet:text-5xl">
					Medeiros
				</h1>
				<p className="text-2xl font-bold text-gray-600 mb-2 max-tablet:text-xl">
					Junior Full Stack Developer
				</p>
				<p className="max-w-lg text-lg text-gray-500 mb-5">
					Passionate about bringing creative ideas to life and
					tackling problems that will push my knowledge and skills
					further.
				</p>
				<a
					href="#contact"
					className="group bg-secondary text-xl text-white font-bold inline-flex items-center gap-4 px-8 py-4 rounded-lg transition active:brightness-125"
				>
					<span className="transition-all">Contact Me</span>
					<PaperPlaneRight
						size={24}
						weight="bold"
						className="transition-all group-hover:ml-6"
					/>
				</a>
			</motion.div>
		</div>
	);
};

export default Hero;
