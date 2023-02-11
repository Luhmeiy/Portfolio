// icons
import { PaperPlaneRight } from "phosphor-react";

// libraries
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();

	return (
		<div
			className="w-full max-w-6xl h-screen flex items-center [@media(max-width:1152px)]:px-4"
			id="home"
		>
			<motion.div
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 0.75, ease: "easeInOut" }}
			>
				<span className="text-3xl text-gray-700 font-bold">
					{t("hero.presentation")}
				</span>
				<h1 className="text-purple-600 text-8xl font-bold mb-5 max-tablet:text-5xl">
					{t("hero.name")}
				</h1>
				<p className="text-2xl font-bold text-gray-600 mb-2 max-tablet:text-xl">
					{t("hero.job")}
				</p>
				<p className="max-w-lg text-lg text-gray-500 mb-5">
					{t("hero.small_about")}
				</p>
				<a
					href="#contact"
					className="group bg-purple-600 text-xl text-white font-bold inline-flex items-center gap-4 px-8 py-4 rounded-lg transition hover:bg-purple-700 active:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
				>
					<span className="transition-all">{t("hero.contact")}</span>
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
