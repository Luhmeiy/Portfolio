// Firebase
import { onValue, ref } from "firebase/database";
import { database } from "../../services/firebase";

// libraries
import { motion, useInView } from "framer-motion";
import { Monitor } from "phosphor-react";
import { useTranslation } from "react-i18next";

// React
import { useEffect, useRef, useState } from "react";

interface Projects {
	githublink: string;
	imgurl: string;
	livepreview?: string;
	title: string;
}

const Work = () => {
	const [projects, setProjects] = useState([]);

	const { t } = useTranslation();

	useEffect(() => {
		onValue(ref(database), (snapshot) => {
			const data = snapshot.val();

			if (data !== null) {
				setProjects(Object.values(data["Projects"]));
			}
		});
	}, []);

	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });

	return (
		<div
			className="w-full min-h-screen flex flex-col justify-center items-center py-10"
			id={`${t("work.id")}`}
		>
			<motion.div
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				className={`w-full max-w-6xl flex flex-col relative translate-y-52 ${
					isInView ? "translate-y-0" : ""
				} transition-all duration-[.75s] ease-in-out [@media(max-width:1152px)]:px-4`}
				ref={viewRef}
			>
				<div className="text-center mb-10">
					<h1 className="text-7xl font-bold">{t("work.title")}</h1>

					<p className="hidden tablet:inline-block">
						{t("work.hover")}
					</p>
					<p className="hidden max-tablet:inline-block">
						{t("work.click")}
					</p>
				</div>

				<div className="w-full grid grid-cols-2 gap-6 max-tablet:grid-cols-1">
					{projects.map((item: Projects) => (
						<div
							key={item.title}
							className="group flex justify-center items-center relative"
						>
							<img src={item.imgurl} />

							<div className="w-full h-full bg-[rgba(0,_0,_0,_.5)] absolute opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

							<div className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100">
								<p className="text-4xl text-white font-bold text-center mb-4">
									{item.title}
								</p>

								<div className="flex flex-wrap justify-center gap-3">
									<a
										href={item.githublink}
										target="_blank"
										className="bg-white text-black flex justify-center items-center gap-2 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
									>
										<i className="devicon-github-original text-2xl"></i>
										{t("work.source")}
									</a>

									{item.livepreview && (
										<a
											href={item.livepreview}
											target="_blank"
											className="bg-white text-black flex justify-center items-center gap-2 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
										>
											<Monitor size={24} color="black" />
											{t("work.live")}
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Work;
