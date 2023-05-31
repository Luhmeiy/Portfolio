// libraries
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

// React
import { useRef } from "react";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const { t } = useTranslation();
	const stringWithHtml = t("about.p2");

	return (
		<div
			className="w-full min-h-screen flex justify-center items-center py-10"
			id={`${t("about.id")}`}
		>
			<motion.div
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				className={`w-full max-w-6xl grid grid-cols-2 justify-items-center relative ${
					isInView ? "translate-y-0" : "translate-y-52"
				} transition-all duration-[.75s] ease-in-out [@media(max-width:1152px)]:px-4 max-tablet:grid-cols-1`}
				ref={ref}
			>
				<h1
					data-text={`${t("about.title")}`}
					className={`text-7xl font-bold mb-10 flex flex-col text-center [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px] [-webkit-text-stroke-color:gray] before:content-[attr(data-text)] before:[-webkit-text-fill-color:black] before:[-webkit-text-stroke-color:black] after:content-[attr(data-text)] after:[-webkit-text-stroke-color:lightgray]`}
				>
					{t("about.title")}
				</h1>

				<div className="w-full max-w-xl text-xl text-gray-500 indent-10">
					<p className="mb-5">{t("about.p1")}</p>
					<p
						dangerouslySetInnerHTML={{ __html: stringWithHtml }}
						className="mb-5"
					></p>
					<p>{t("about.p3")}</p>
				</div>
			</motion.div>
		</div>
	);
};

export default About;
