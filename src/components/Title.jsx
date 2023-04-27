export function Title({upperText , focus , downText}) {
	return (
		<h1 className="font-bold text-3xl">
			{upperText}
			<span className="text-oro ml-2">{focus}</span> <br />
            {downText}
		</h1>
	);
}
