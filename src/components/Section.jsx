import { FilterContent } from "./FilterContent";

export function Section({ children, image, invert, custom }) {
	return (
		<div
			className={`flex flex-col ${
				invert ? "xl:flex-row-reverse" : "xl:flex-row"
			} ${custom}`}
		>
			<div className="p-3 py-12 flex flex-col gap-3 xl:w-1/2 xl:justify-center xl:px-24">
				{children}
			</div>

			<div className="relative w-full aspect-square sm:h-[25rem] xl:h-auto xl:w-1/2">
				<FilterContent custom={"w-full h-full"}>
					<img
						src={image}
						alt="illustration image"
						className="absolute w-full h-full object-cover"
					/>
				</FilterContent>
			</div>
		</div>
	);
}
