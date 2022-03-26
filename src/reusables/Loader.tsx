const Loader = () => {
	return (
		<div className="bg-slate-100 h-screen flex flex-col justify-center items-center fixed left-0 w-screen overflow-hidden">
			<div className="flex gap-2">
				<div className="h-5 w-5 rounded-full bg-amber-500 animate-pulse" />
				<div className="h-5 w-5 rounded-full bg-amber-400 animate-pulse" />
				<div className="h-5 w-5 rounded-full bg-amber-200 animate-pulse" />
			</div>
		</div>
	);
};

export default Loader;
