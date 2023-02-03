// libraries
import { List, X } from "phosphor-react";
import { motion } from "framer-motion";

// React
import { useState } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex justify-center px-4 py-8 bg-[rgba(255, 255, 255, .25)] backdrop-filter backdrop-blur-sm border-b border-b-[rgba(255, 255, 255, .18)] fixed z-10">
			<div className="w-full max-w-6xl flex justify-between items-center ">
				<div className="text-3xl font-bold text-secondary">
					Medeiros
				</div>

				<ul className="flex justify-center items-center max-tablet:hidden">
					{["home", "about", "skills", "work", "contact"].map(
						(item) => (
							<li
								key={`link-${item}`}
								className="mx-4 cursor-pointer flex flex-col items-center group"
							>
								<div className="w-2 h-2 rounded-full mb-1 duration-[.3s] ease-in-out group-hover:bg-secondary" />
								<a
									href={`#${item}`}
									className="text-gray-color uppercase font-bold duration-[.3s] ease-in-out hover:text-secondary"
								>
									{item}
								</a>
							</li>
						)
					)}
				</ul>

				<div className="w-9 h-9 rounded-full relative flex justify-center items-center bg-secondary tablet:hidden">
					<List
						onClick={() => setToggle(true)}
						color="white"
						className="w-[70%] h-[70%] cursor-pointer"
					/>

					{toggle && (
						<motion.div
							whileInView={{ x: [300, 0] }}
							transition={{ duration: 0.85, ease: "easeOut" }}
							className="h-screen bg-white fixed z-20 p-4 inset-y-0 right-0 w-[80%] flex flex-col justify-end items-end shadow-[0_0_20px_rgba(168,168,168,.15)]"
						>
							<X
								onClick={() => setToggle(false)}
								size={35}
								className="text-seconday-color my-2 mx-4 cursor-pointer"
							/>

							<ul className="w-full h-full flex flex-col justify-start items-start">
								{[
									"home",
									"about",
									"skills",
									"work",
									"contact",
								].map((item) => (
									<li
										key={item}
										className="m-4 cursor-pointer flex flex-col items-center group"
									>
										<a
											href={`#${item}`}
											className="text-gray-color uppercase text-sm font-bold duration-[.3s] ease-in-out hover:text-secondary"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
