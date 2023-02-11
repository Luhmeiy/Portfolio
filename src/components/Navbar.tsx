// libraries
import {
	Desktop,
	House,
	PaperPlaneRight,
	Scroll,
	SquaresFour,
	User,
	UsersThree,
	X,
} from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";
import * as Popover from "@radix-ui/react-popover";
import { useTranslation } from "react-i18next";

// React
import { useState } from "react";

const icons = [
	<House size={24} />,
	<User size={24} />,
	<Scroll size={24} />,
	<Desktop size={24} />,
	<PaperPlaneRight size={24} />,
];

const Navbar = () => {
	const [isMediaOpen, setMediaOpen] = useState(false);
	const [toggle, setToggle] = useState(false);

	const { t } = useTranslation();

	const navItems: string[] = t("nav.titles", { returnObjects: true });

	function toggleMedia() {
		if (isMediaOpen) {
			setMediaOpen(false);
		} else {
			setMediaOpen(true);
		}
	}

	return (
		<nav className="w-full flex justify-center px-4 py-8 bg-[rgba(255, 255, 255, .25)] backdrop-filter backdrop-blur-sm border-b border-b-[rgba(255, 255, 255, .18)] fixed z-10 max-tablet:bottom-0 max-tablet:bg-white max-tablet:px-6 max-tablet:py-3 max-tablet:rounded-xl max-tablet:shadow-[0_0_20px_rgba(168,168,168,.15)]">
			<motion.div
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.75, ease: "easeInOut" }}
				className="w-full max-w-6xl flex justify-between items-center opacity-0"
			>
				<div className="text-3xl font-bold text-purple-600 max-tablet:text-2xl">
					Medeiros
				</div>

				<ul className="flex justify-center items-center max-tablet:hidden">
					{navItems.map((item) => (
						<li
							key={`link-${item}`}
							className="mx-4 cursor-pointer flex justify-center"
						>
							<a
								href={`#${item}`}
								className="text-gray-600 uppercase font-bold rounded-sm duration-[.3s] ease-in-out hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
								aria-label={`Scroll to ${item}`}
							>
								{item}
							</a>
						</li>
					))}
				</ul>

				<div className="rounded-full relative flex justify-center items-center tablet:hidden">
					<SquaresFour onClick={() => setToggle(true)} size={26} />

					<AnimatePresence>
						{toggle && (
							<motion.div
								initial={{ bottom: -200 }}
								animate={{ bottom: 0 }}
								exit={{ bottom: -200 }}
								transition={{
									duration: 0.5,
									ease: "easeInOut",
								}}
								className="bg-white fixed z-20 px-6 py-4 inset-x-0 inset-b-0 w-full flex flex-col items-end rounded-3xl shadow-[0_0_20px_rgba(168,168,168,.15)]"
							>
								<ul className="w-full h-full grid grid-cols-3">
									{navItems.map((item, i) => (
										<li
											key={item}
											className="m-4 cursor-pointer flex flex-col items-center group"
										>
											<a
												href={`#${item}`}
												className="text-gray-500 uppercase text-sm font-bold flex flex-col items-center duration-[.3s] ease-in-out hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
											>
												{icons[i]}
												<span className="mt-1">
													{item}
												</span>
											</a>
										</li>
									))}

									<li className="m-4 cursor-pointer flex flex-col items-center relative group">
										<Popover.Root>
											<Popover.Trigger asChild>
												<button className="text-gray-500 uppercase text-sm font-bold flex flex-col items-center duration-[.3s] ease-in-out hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white">
													<UsersThree size={24} />
													<span className="mt-1">
														{t("nav.social")}
													</span>
												</button>
											</Popover.Trigger>

											<Popover.Portal>
												<Popover.Content className="bg-zinc-700 flex text-white text-sm font-bold uppercase px-8 py-2 mr-4 rounded-lg z-20 tablet:hidden">
													<a
														href="https://www.linkedin.com/in/luhmeiy/"
														target="_blank"
														className="flex flex-col items-center mr-8"
													>
														<i className="devicon-linkedin-plain text-2xl" />
														<span className="mt-1">
															Linkedin
														</span>
													</a>

													<a
														href="https://github.com/Luhmeiy"
														target="_blank"
														className="flex flex-col items-center"
													>
														<i className="devicon-github-original text-2xl" />
														<span className="mt-1">
															GitHub
														</span>
													</a>
													<Popover.Arrow />
												</Popover.Content>
											</Popover.Portal>
										</Popover.Root>
									</li>
								</ul>
								<X
									onClick={() => {
										setMediaOpen(false);
										setToggle(false);
									}}
									size={24}
									weight={"bold"}
									className="text-red-400"
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.div>
		</nav>
	);
};

export default Navbar;
