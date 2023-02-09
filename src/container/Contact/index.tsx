// libraries
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

// React
import { FormEvent, useRef } from "react";

const Contact = () => {
	const viewRef = useRef(null);
	const isInView = useInView(viewRef, { once: true });

	function sendEmail(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const target = e.target as HTMLFormElement;

		emailjs.sendForm(
			"service_4aa788e",
			"template_7gtgs5n",
			target,
			"Ih8ISVmcCkc7Bg_-2"
		);

		target.reset();
	}

	return (
		<div
			className="w-full min-h-screen flex flex-col justify-center items-center"
			id="contact"
		>
			<motion.form
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				className={`w-full max-w-6xl flex flex-col items-center relative translate-y-52 ${
					isInView ? "translate-y-0" : ""
				} transition-all duration-[.75s] ease-in-out [@media(max-width:1152px)]:px-4`}
				ref={viewRef}
				onSubmit={sendEmail}
			>
				<h1 className="text-7xl font-bold mb-10">Contact Me</h1>

				<div className="w-full max-w-[700px] flex gap-4 mb-4">
					<input
						type="text"
						name="name"
						placeholder="Your name"
						className="w-full bg-blue-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
					/>
					<input
						type="email"
						name="email"
						placeholder="Your email"
						className="w-full bg-blue-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
					/>
				</div>
				<textarea
					name="message"
					placeholder="Your message"
					className="w-full max-w-[700px] h-60 bg-blue-100 p-4 rounded-md resize-none mb-8 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
				></textarea>

				<button
					type="submit"
					className="bg-purple-600 text-white font-bold tracking-wide px-8 py-4 rounded-lg transition-colors duration-300 hover:bg-purple-700 active:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
				>
					Send message
				</button>
			</motion.form>
		</div>
	);
};

export default Contact;
