import React from "react";
import styled from "styled-components";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
//import our code editor an input that controls all editing code
import { Controlled as ControlledEditor } from "react-codemirror2";

const EditorFile = ({ displayName, language, value, onChange }) => {
	const handleChange = (editor, data, value) => {
		onChange(value);
	};
	return (
		<Container>
			<Card>
				<CardTitle>{displayName}</CardTitle>
				<button>open/close</button>
			</Card>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					theme: "material",
					lineNumbers: true,
				}}
			/>
		</Container>
	);
};

export default EditorFile;
const Card = styled.div`
	color: white;
	display: flex;
	justify-content: space-between;
	background-color: hsl(225, 6%, 13%);
	padding: 0.5rem 0.5rem 0.5rem 1rem;
`;
const CardTitle = styled.div`
	color: white;
	display: flex;
	justify-content: space-between;
	height: 100%;
`;
const Container = styled.div`
	flex: 1;
	flex-direction: column;
	padding: 0.5rem;
	background-color: hsl(225, 6%, 25%);
	height: 100%;
`;
