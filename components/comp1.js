export default function Comp1(){
	return (
		<div className="w-full min-h-[400px] box flex flex-col gap-4 p-4">
			<h2 className="text-3xl font-semibold">Similar Word Prediction</h2>
			<p>Given a word, this demo shows a list of other words that are similar to it, i.e. nearby in the vector space.</p>

			<div className="w-full h-full">
				<div className="flex gap-4">
					<input className="flex-grow" type="text" placeholder="Enter a word" />
					<button>Submit</button>
				</div>
			</div>
		</div>
	)
}