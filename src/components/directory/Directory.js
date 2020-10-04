import React from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { sections } from "../../redux/directory/directory-selector";

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...sectionProps }) => (
				<MenuItem key={id} {...sectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: sections,
});
export default connect(mapStateToProps)(Directory);
