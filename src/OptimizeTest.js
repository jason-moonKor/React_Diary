import React, {useState, useEffect} from "react";

const CounterA = React.memo(({count}) => {
	useEffect(() => {
		console.log(`카운트 A 업데이트 : ${count}`);
	});
	return <div>{count}</div>;
});

const CounterB = ({obj}) => {
	useEffect(() => {
		console.log(`카운트 B 업데이트 : ${obj.count}`);
	});
	return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
	if (prevProps.obj.count === nextProps.obj.count) {
		return true;
	}
	return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
	const [count, setCount] = useState(1);
	const [obj, setObj] = useState({
		count: 1
	});

	return (
		<div style={{padding: 50}}>
			<div>
				<h2>Count A</h2>
				<CounterA count={count} />
				<button
					onClick={() => {
						setCount(count);
					}}
				>
					A Button
				</button>
			</div>
			<div>
				<h2>Count B</h2>
				<MemoizedCounterB obj={obj} />
				<button
					onClick={() => {
						setObj({
							count: obj.count
						});
					}}
				>
					B Button
				</button>
			</div>
		</div>
	);
};

export default OptimizeTest;
