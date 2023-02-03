import { PaperPlaneRight } from "phosphor-react";

const Hero = () => {
	return (
		<div className="w-full max-w-6xl h-screen flex items-center mx-0 px-4">
			<div>
				<h1 className="text-7xl font-bold mb-2 max-tablet:text-5xl">
					Hello there, <br />{" "}
					<span className="text-secondary">I'm Medeiros</span>
				</h1>
				<p className="text-2xl font-bold text-gray-color mb-2 max-tablet:text-xl">
					Junior Full Stack Developer
				</p>
				<p className="max-w-lg text-lg text-gray-400 mb-8">
					Passionate about bringing creative ideas to life and
					tackling problems that will push my knowledge and skills
					further.
				</p>

				<a
					href="#contact"
					className="bg-secondary text-xl text-white font-bold inline-flex items-center gap-4 px-8 py-4 rounded-lg max-tablet:text-xl"
				>
					Contact Me
					<PaperPlaneRight size={24} weight="bold" />
				</a>
			</div>
		</div>
	);
};

export default Hero;
