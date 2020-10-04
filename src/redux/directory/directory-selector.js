import { createSelector } from "reselect";

//GET DIRECTORY STATE
const directoryState = (state) => state.directory;

//GET DIRECTORY STATE SECTIONS PROPERTY
export const sections = createSelector(
	[directoryState],
	(directory) => directory.sections
);
