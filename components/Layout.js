import React, {Component} from 'react'
import Head from 'next/head'
import { injectGlobal } from 'styled-components'
// Components


export default class Layout extends Component {
	static getInitialProps({ req }) {
		if (req) return { isServer: true }
		return { isServer: false }
	}

	componentDidMount() {
		return injectGlobal`
			* { box-sizing: border-box; transition: all .3s ease-in-out; }
			html, body { overflow-x: hidden; }
			body {
				background-color: #fff;
				color: #090b11;
				font-family: 'Quicksand', Arial, sans-serif;
				font-size: 16px;
				margin: 0;
				padding: 0;
			}
			a { color: inherit; text-decoration: none; }
			a:hover { text-decoration: underline; }
		`
	}

	render() {
		const { title, isServer, background, children } = this.props

		return (
			<main role="application">
				<Head>
					<title>Blackome Digital | {title}</title>
				</Head>

				{background && (
					<div style={{
						backgroundImage: `url(${background})`,
						position: 'fixed',
						opacity: .05,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}} />
				)}

				{React.Children.map(children, child => (
					React.cloneElement(child, { isServer })
				))}
			</main>
		)
	}
}

