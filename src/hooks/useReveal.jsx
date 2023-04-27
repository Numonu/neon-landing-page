import { useRef , useState , useEffect } from "react";

export function useReveal() {
	const [reveal, setReveal] = useState(false);
	const thisEl = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(e) => {
				e.forEach((el) => {
					if (el.target === thisEl.current) el.isIntersecting ? setReveal(true) : setReveal(false);
				});
			},
			{
				root: window.document,
				threshold: 0.5,
			}
		);

		thisEl && observer.observe(thisEl.current);

	}, []);

    return [reveal , thisEl];
}
