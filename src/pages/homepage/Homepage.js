import React from "react";
import Directory from "../../components/directory/Directory";
import "./homepage.style.scss";
import { HomePageContainerStyle } from "./homepage.styles";

const Homepage = () => {
	return (
		<HomePageContainerStyle>
			<Directory />
		</HomePageContainerStyle>
	);
};

export default Homepage;
