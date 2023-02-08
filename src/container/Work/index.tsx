// Firebase
import { onValue, ref } from "firebase/database";
import { database } from "../../services/firebase";

// libraries
import { motion, useInView } from "framer-motion";
import { Monitor } from "phosphor-react";

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
			className="w-full min-h-screen flex flex-col justify-center items-center"
			id="work"
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
					<h1 className="text-7xl font-bold">Work</h1>

					<p className="hidden tablet:inline-block">
						Hover to reveal links ;)
					</p>
					<p className="hidden max-tablet:inline-block">
						Click to reveal links ;)
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

								<div className="flex gap-3">
									<a
										href={item.githublink}
										target="_blank"
										className="bg-white text-black flex justify-center items-center gap-2 px-3 py-1"
									>
										<i className="devicon-github-original text-2xl"></i>
										Source Code
									</a>

									{item.livepreview && (
										<a
											href={item.livepreview}
											target="_blank"
											className="bg-white text-black flex justify-center items-center gap-2 px-3 py-1"
										>
											<Monitor size={24} color="black" />
											Live Preview
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
