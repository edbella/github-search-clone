import LoadingSignal from "./LoadingSignal";

const Loader = () => {
	return (
		<div className="bg-slate-50 h-screen flex flex-col justify-center items-center fixed left-0 top-0 w-screen overflow-hidden z-[99999]">
			<LoadingSignal />
		</div>
	);
};

export default Loader;
