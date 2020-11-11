import React, { Component } from "react"
import {
	ErrorImageContainer,
	ErrorImageOverlay,
	ErrorImageText,
} from "./error-boundary.styles"

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasErrors: false,
		}
	}

	static getDerivedStateFromError(error) {
		return {
			hasErrors: true,
		}
	}

	componentDidCatch(error, info) {
		console.log(error)
	}

	render() {
		if (this.state.hasErrors) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
					<ErrorImageText>Sorry This page is broken</ErrorImageText>
				</ErrorImageOverlay>
			)
		} else {
			return this.props.children
		}
	}
}

export default ErrorBoundary
