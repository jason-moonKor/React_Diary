import {useState, useRef} from "react";

const DiaryEditor = ({onCreate}) => {
	const authorInput = useRef();
	const contentInput = useRef();
	const [state, setState] = useState({
		author: "",
		content: "",
		emotion: 1
	});

	const handleChangeState = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = () => {
		if (state.author.length < 1) {
			// alert("최소 1글자 이상 입력해주세요");
			authorInput.current.focus(); // 해당라인으로 포커스이동
			return;
		}
		if (state.content.length < 5) {
			// alert("최소 5글자 이상 입력해주세요");
			contentInput.current.focus();
			return;
		}
		onCreate(state.author, state.content, state.emotion);
		alert("저장성공");
		setState({
			author: "",
			content: "",
			emotion: 1
		});
	};
	return (
		<div className="DiaryEditor">
			<h2>오늘의 일기</h2>
			<div>
				<input
					ref={authorInput}
					name="author"
					value={state.author}
					onChange={handleChangeState}
				/>
			</div>
			<div>
				<textarea
					ref={contentInput}
					name="content"
					value={state.content}
					onChange={handleChangeState}
				/>
			</div>
			<div>
				오늘의 감정점수 :
				<select
					name="emotion"
					value={state.emotion}
					onChange={handleChangeState}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
				</select>
			</div>
			<div>
				<button onClick={handleSubmit}>일기 저장하기</button>
			</div>
		</div>
	);
};

export default DiaryEditor;
