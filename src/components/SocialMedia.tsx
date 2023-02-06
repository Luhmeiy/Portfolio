import { motion } from "framer-motion";

const SocialMedias = () => {
	return (
		<motion.div
			whileInView={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: 0.75, ease: "easeInOut" }}
			className="fixed flex flex-col bottom-5 left-6"
		>
			<motion.a
				whileHover={{ scale: 1.2, borderColor: "#0077B5" }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				href="https://www.linkedin.com/in/luhmeiy/"
				className="group h-14 w-14 flex justify-center items-center border border-gray-200 rounded-full mb-3"
			>
				<i className="devicon-linkedin-plain text-gray-600 text-2xl group-hover:text-[#0077B5]"></i>
			</motion.a>

			<motion.a
				whileHover={{ scale: 1.2, borderColor: "#000" }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				href="https://github.com/Luhmeiy"
				className="group h-14 w-14 flex justify-center items-center border border-gray-200 rounded-full"
			>
				<i className="devicon-github-original text-gray-600 text-2xl group-hover:text-black"></i>
			</motion.a>
		</motion.div>
	);
};

export default SocialMedias;