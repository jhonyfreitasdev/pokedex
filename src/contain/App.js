import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Home } from "../features/home/pages";
import { theme } from "../constants/theme"


export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	);
}

const GlobalStyle = createGlobalStyle`
  	html{
    	font-size: 62.5%;
  	}
  	*{
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		font-weight: 300;
		box-sizing: border-box;
	}
	a{
		text-decoration: none;
		color: #000000;
	}
	ul{
		list-style: none;
	}
`