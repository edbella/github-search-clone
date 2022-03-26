const LoadingSignal = () => {
	return (
		<div className="flex gap-2">
			<div className="h-5 w-5 rounded-full bg-amber-500 animate-pulse" />
			<div className="h-5 w-5 rounded-full bg-amber-400 animate-pulse" />
			<div className="h-5 w-5 rounded-full bg-amber-200 animate-pulse" />
		</div>
	);
};

export default LoadingSignal;
