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
	designby?: string;
	githublink: string;
	imgurl: string;
	livepreview?: string;
	title: string;
	order: number;
}

interface ProjectsResponse {
	Projects: Projects[];
}

const Work = () => {
	const [projects, setProjects] = useState<Projects[]>();

	const { t } = useTranslation();

	useEffect(() => {
		onValue(ref(database), (snapshot) => {
			const data: ProjectsResponse = snapshot.val();

			if (data !== null) {
				const values = Object.values(data.Projects);
				values.sort((a, b) => a.order - b.order);

				setProjects(values);
			}
		});
	}, []);

	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });

	return (
		<div
			className="w-full min-h-screen flex flex-col justify-center items-center py-10 tablet:pt-28"
			id={`${t("work.id")}`}
		>
			<motion.div
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				className={`w-full max-w-6xl flex flex-col relative ${
					isInView ? "translate-y-0" : "translate-y-52"
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
					{projects &&
						projects.map((item: Projects) => (
							<div
								key={item.title}
								className="group flex justify-center items-center relative shadow-lg"
							>
								<img src={item.imgurl} />

								<div className="w-full h-full bg-[rgba(0,_0,_0,_.5)] absolute opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

								<div className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100">
									<p className="text-4xl text-white font-bold text-center">
										{item.title}
									</p>

									{item.designby && (
										<p className="max-w-xs text-lg text-white text-center mt-1">
											<span className="font-bold">
												Design:
											</span>{" "}
											{item.designby}
										</p>
									)}

									<div className="flex flex-wrap justify-center gap-3 mt-4">
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
												<Monitor
													size={24}
													color="black"
												/>
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
