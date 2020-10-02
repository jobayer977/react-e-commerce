import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...othersProps }) => (
						<CollectionItem key={id} {...othersProps} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
