import { Footer } from "../components/Footer";
import { RevealContent } from "../components/RevealContent";
import { Section } from "../components/Section";
import { Title } from "../components/Title";
import { Hero } from "./Hero";

export function App() {
	return (
		<div className="bg-zinc-900  text-zinc-50 ">
			<div className="max-w-[2000px] mx-auto">
				<Hero />
				<Section
					custom={"bg-zinc-950"}
					image={
						"https://cdn.pixabay.com/photo/2021/04/20/16/32/woman-6194370_1280.jpg"
					}
				>
					<RevealContent>
						<Title
							upperText={"We eat apps and webs for"}
							focus={"breakfast"}
						/>
					</RevealContent>
					<RevealContent>
						<p className="text-xl font-medium">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptate reprehenderit veritatis sed libero
							cupiditate, voluptates, repellendus, voluptatem quod
							soluta cumque nesciunt repudiandae molestiae quis
							maxime!
						</p>
					</RevealContent>
				</Section>
				<Section
					image={
						"https://cdn.pixabay.com/photo/2019/12/17/07/55/tunnel-4701031_1280.jpg"
					}
					invert
				>
					<RevealContent>
						<Title
							upperText={"We make the rules. And they"}
							focus={"sell"}
						/>
					</RevealContent>
					<RevealContent>
						<p className="text-xl font-medium">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptate reprehenderit veritatis sed libero
							cupiditate, voluptates, repellendus, voluptatem quod
							soluta cumque nesciunt repudiandae molestiae quis
							maxime!
						</p>
					</RevealContent>
				</Section>
				<Section
					custom={"bg-zinc-950"}
					image={
						"https://cdn.pixabay.com/photo/2020/10/18/18/42/bulb-5665770_1280.jpg"
					}
				>
					<RevealContent>
						<Title
							upperText={"Join us, It might be"}
							focus={"fun"}
						/>
					</RevealContent>
					<RevealContent>
						<p className="text-xl font-medium">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptate reprehenderit veritatis sed libero
							cupiditate, voluptates, repellendus, voluptatem quod
							soluta cumque nesciunt repudiandae molestiae quis
							maxime!
						</p>
					</RevealContent>
				</Section>
				<Section
					image={
						"https://cdn.pixabay.com/photo/2021/03/01/07/27/girl-6058990_1280.jpg"
					}
					invert
				>
					<RevealContent>
						<Title
							upperText={"teaches the"}
							focus={"unexplainable"}
							downText={"and glorifies"}
						/>
					</RevealContent>
					<RevealContent>
						<p className="text-xl font-medium">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptate reprehenderit veritatis sed libero
							cupiditate, voluptates, repellendus, voluptatem quod
							soluta cumque nesciunt repudiandae molestiae quis
							maxime!
						</p>
					</RevealContent>
				</Section>
				<Footer />
			</div>
		</div>
	);
}
