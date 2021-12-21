import React, { useState, useEffect } from "react";
import EditorFile from "./EditorFile";
import styled from "styled-components";
import useLocalStorage from "./LocalStorageFile";
const HomePage = () => {
	const [html, setHtml] = useLocalStorage("html", "");
	const [js, setJS] = useLocalStorage("js", "");
	const [css, setCSS] = useLocalStorage("css", "");

	// code to make everything working on the iframe
	const [srcDoc, setSrcDoc] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(
				`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `,
			);
		}, 250);

		return () => clearTimeout(timeout);
	}, [html, css, js]);

	return (
		<Container>
			<Holder>
				<EditorFile
					language='xml'
					displayName='HTML'
					value={html}
					onChange={setHtml}
				/>

				<EditorFile
					language='css'
					displayName='css'
					value={css}
					onChange={setCSS}
				/>
				<EditorFile
					language='javascript'
					displayName='javascript'
					value={js}
					onChange={setJS}
				/>
			</Holder>

			<iframe
				style={{
					background: " white",
					color: "black",
				}}
				srcDoc={srcDoc}
				title='output'
				sandbox='allow-scripts'
				height='450px'
				frameBorder='0'
				width='100%'></iframe>
		</Container>
	);
};

export default HomePage;

const Container = styled.div`
	background-color: hsl(225, 6%, 25%);
	height: 100%;
`;
const Holder = styled.div`
	height: 50vh;
	display: flex;
	flex: 1;
`;
