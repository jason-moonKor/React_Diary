import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useRef, useState, useEffect} from "react";
// import LifeCycle from "./LifeCycle";

// https://jsonplaceholder.typicode.com/comments

// const dummyList = [
// 	{
// 		id: 1,
// 		author: "문재상",
// 		content: "하이 1",
// 		emotion: 5,
// 		created_date: new Date().getTime()
// 	},
// 	{
// 		id: 2,
// 		author: " 홍길동",
// 		content: "하이 2",
// 		emotion: 1,
// 		created_date: new Date().getTime()
// 	},
// 	{
// 		id: 3,
// 		author: "이순신",
// 		content: "하이 3",
// 		emotion: 4,
// 		created_date: new Date().getTime()
// 	},
// 	{
// 		id: 4,
// 		author: "제이슨",
// 		content: "하이 4",
// 		emotion: 2,
// 		created_date: new Date().getTime()
// 	},
// 	{
// 		id: 5,
// 		author: "이재용",
// 		content: "하이 5",
// 		emotion: 3,
// 		created_date: new Date().getTime()
// 	}
// ];

function App() {
	const [data, setData] = useState([]);
	const dataId = useRef(0);

	const getData = async () => {
		const res = await fetch(
			"https://jsonplaceholder.typicode.com/comments"
		).then((res) => res.json());
		const initData = res.slice(0, 20).map((it) => {
			return {
				author: it.email,
				content: it.body,
				emotion: Math.floor(Math.random() * 5) + 1,
				created_date: new Date().getTime(),
				id: dataId.current++
			};
		});
		setData(initData);
	};

	useEffect(() => {
		getData();
	}, []);

	const onCreate = (author, content, emotion) => {
		const created_date = new Date().getTime();
		const newItem = {
			author,
			content,
			emotion,
			created_date,
			id: dataId.current
		};
		dataId.current += 1;
		setData([newItem, ...data]);
	};

	const onRemove = (targetId) => {
		console.log(`${targetId}가 삭제되었습니다`);
		const newDiaryList = data.filter((it) => it.id !== targetId);
		console.log(newDiaryList);
		setData(newDiaryList);
	};

	const onEdit = (targetId, newContent) => {
		setData(
			data.map((it) => (it.id === targetId ? {...it, content: newContent} : it))
		);
	};

	return (
		<div className="App">
			{/* <LifeCycle /> */}
			<DiaryEditor onCreate={onCreate} />
			<DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
		</div>
	);
}

export default App;
