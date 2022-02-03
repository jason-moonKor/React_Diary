import React, {useState, useEffect} from "react";

const UnmountTest = () => {
	useEffect(() => {
		console.log("마운트!");
		return () => {
			console.log("언마운트!");
		};
	}, []);
	return <>Unmount Testing Component</>;
};

const LifeCycle = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggle = () => setIsVisible(!isVisible);
	// const [count, setCount] = useState(0);
	// const [text, setText] = useState("");

	// useEffect(() => {
	// 	console.log("Mount");
	// }, []);

	// useEffect(() => {
	// 	console.log("업데이트!");
	// });

	// useEffect(() => {
	// 	console.log(`count is update ${count}`);
	// 	if (count > 5) {
	// 		alert("카운트가 5를 넘었습니다 1로 초기화합니다");
	// 		setCount(1);
	// 	}
	// }, [count]);
	// useEffect(() => {
	// 	console.log(`text is update ${text}`);
	// }, [text]);

	return (
		<div style={{padding: 20}}>
			{/* <div>
				{count}
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>
			<div>
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</div> */}
			<button onClick={toggle}>ON/OFF</button>
			{isVisible && <UnmountTest />}
		</div>
	);
};

export default LifeCycle;
