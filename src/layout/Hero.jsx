import { BsFillPlusCircleFill } from "react-icons/bs";
import { Title } from "../components/Title";
export function Hero() {
	return (
		<div className="relative overflow-hidden">
			<div className="bg-gradient-to-r from-cyan-400 to-violet-400 absolute w-52 h-52 rounded-full scale-y-150 -rotate-45 opacity-75"></div>
			<div className="bg-gradient-to-r from-violet-400 to-amber-200 absolute w-52 h-52 right-0 bottom-0 rounded-full scale-y-150 rotate-45 opacity-75"></div>

			<div className="p-3 xl:h-screen xl:grid xl:grid-rows-[min-content_1fr]  bg-opacity-90 backdrop-blur-3xl">
				<header className="flex justify-between items-center">
					<h1 className="font-jost font-bold text-3xl">Kenney</h1>
					<div className="hidden gap-2 xl:flex">
						<a
							className="bg-neutral-500 border-2 border-neutral-500 px-3 py-1 rounded-full hover:bg-transparent transition-colors"
							href="#"
						>
							Lorem
						</a>
						<a
							className="bg-neutral-500 border-2 border-neutral-500 px-3 py-1 rounded-full hover:bg-transparent transition-colors"
							href="#"
						>
							Ipsum
						</a>
					</div>
					<a
						className="text-oro px-3 py-1 rounded-full border border-oro hover:bg-oro hover:text-neutral-100 transition-colors"
						href="#"
					>
						Join Us
					</a>
				</header>
				<main className="py-16 flex flex-col items-start justify-center gap-4">
					<h2 className="text-neutral-50 uppercase tracking-widest">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h2>
					<Title
						upperText={"A occurence / object / sight that is "}
						focus={"both "}
						downText={"a phenomenon and anomaly"}
					/>
					<p className="text-neutral-200 font-light uppercase tracking-widest">
						<span className="text-violet-400 font-bold">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</span>
						<br />
						Consectetur adipisicing elit. Deserunt dolor aliquid vero beatae cum! Est quam praesentium quas laudantium cum!
					</p>
					<button className="text-neutral-50 text-5xl rounded-full hover:scale-110 transition-transform">
						<BsFillPlusCircleFill />
					</button>
				</main>
			</div>
		</div>
	);
}
