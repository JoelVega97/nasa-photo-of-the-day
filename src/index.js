import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from 'styled-components'
import "./index.css";
import App from "./App";
import theme from "./Theme"

export const BASE_URL = 'https://api.nasa.gov'
export const API = 'api_key=Aj87JwreYfnH0gR4XNrmVlkl82xpg57D7vYSFZ1o'

ReactDOM.render(
<ThemeProvider theme = {theme}>
<App /> 
</ThemeProvider>,
document.getElementById("root"));
