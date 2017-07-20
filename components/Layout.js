import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styled, { injectGlobal, keyframes } from 'styled-components'
import {Menu} from './'


const BackgroundAnimation = keyframes`
	0% {background-position: 0; transform: rotate(180deg);}
	100% {background-position: 150vw 150vh; transform: rotate(0);}
`

const StyledBackground = styled.div`
	background-image: 
		linear-gradient(
			to left,
      rgba(250, 250, 250, .2) 90%, 
      rgba(220, 220, 220, .8) 100%
    ),
    url(${props => props.background.image || ''})
  ;
  background-size: ${props => props.background.size || 500}px;
	position: fixed;
	top: -100vh;
	left: -100vw;
	right: -100vw;
	bottom: -100vh;
	opacity: .03;
	animation: ${BackgroundAnimation} 200s linear infinite;
	z-index: -100;
`


export default class Layout extends React.Component {
	state = {
		componentLoaded: false,
	};

	static getInitialProps({ req }) {
		if (req) return { isServer: true }
		return { isServer: false }
	}

	static propTypes = {
		title: PropTypes.string,
		isServer: PropTypes.bool,
		children: PropTypes.element.isRequired,
		background: PropTypes.shape({
			image: PropTypes.string,
			size: PropTypes.number
		}),
		menuItems: PropTypes.array,
	};

	static defaultProps = {
		title: 'Digital Agency',
		background: null,
		isServer: true,
		menuItems: null,
	};


	componentDidMount() {
		this.setState({componentLoaded: true})
		injectGlobal`
			* { box-sizing: border-box; transition: all .3s ease-in-out; }
			html, body { overflow-x: hidden; }
			body {
				background-color: #fff;
				color: #090b11;
				font-family: 'Quicksand', Arial, sans-serif;
				font-size: 16px;
				margin: 0;
				padding: 0;
				transition: background-position .3s ease;
			}
			a { color: inherit; text-decoration: none; }
			a:hover { text-decoration: underline; }
			::-webkit-scrollbar {
			    background-color: #fff;
			    width: 10px;
			    padding: 10px 0; 
			}
			::-webkit-scrollbar-thumb {
			    border-radius: 2px;
			    background-image: linear-gradient(to right, #2F80ED, #56CCF2);
			    background-image: -webkit-linear-gradient(left, #2F80ED, #56CCF2);
			}
		`
	}

	render() {
		const { title, menuItems, background, children } = this.props
		const {componentLoaded} = this.state

		return (
			<main role="application">
				<Head>
					<title>Blackome Digital | {title}</title>
					{componentLoaded && (
						<link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600|Space+Mono:400,700,700i"
						/>
					)}
				</Head>

				<Menu items={menuItems} />

				{React.Children.map(children, child => (
					React.cloneElement(child, {})
				))}

				{background && <StyledBackground background={background} />}
			</main>
		)
	}
}

