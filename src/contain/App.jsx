import { BackgroundProvider } from "../context/theme-context";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";

import { types } from "../constants/types"

import "../_assets/styles/fonts.css"

export const App = () => {
	return (
		<BackgroundProvider>
			<ThemeProvider theme={types}>
				<GlobalStyle />
				<AppRoutes />
			</ThemeProvider>
		</BackgroundProvider>
	);
}

const GlobalStyle = createGlobalStyle`
  	html{
    	font-size: 62.5%;
		font-family: 'Patrick Hand SC', cursive;
  	}
  	*{
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		box-sizing: border-box;
	}
	h1{
		font-family: 'Pokemon';
	}
	a{
		text-decoration: none;
		color: #000000;
	}
	ul{
		list-style: none;
	}
`