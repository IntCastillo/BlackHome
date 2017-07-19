import React from 'react'
import Link from 'next/link'
import NoSSR from 'react-no-ssr'
import styled, {css} from 'styled-components'


const gradientBackground = css`
	background-image: linear-gradient(to right, #2F80ED, #56CCF2);
	background-image: -webkit-linear-gradient(left, #2F80ED, #56CCF2);
`

const CloseLines = css`
	& span:nth-child(1) { transform: rotate(45deg); position: absolute; width: 70%;left: 5%; }
	& span:nth-child(3) { transform: rotate(-45deg); position: absolute; width: 70%;right: 5%; }
	& span:nth-child(2) { transform: translateX(-20px); opacity: 0; }
`

const NavBar = styled.nav`
	background-color: rgba(255,255,255,.7);
	display: flex;
	height: 10vh;
	justify-content: space-between;
	padding: 1vh 50px 1vh;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 10;
	& > img { height: inherit; }
	& > * { z-index: 10; }
`

const CircleMenu = styled.div`
	border-radius: 100px;
	box-shadow: 0px 0px 0px rgba(0,0,0,0);
	position: relative;
	margin: .5vh;
	width: 7vh;
	height: 7vh;
	transform: rotate(${props => props.active ? '360' : '0'}deg);
	&:hover { box-shadow: 1px 1px 10px rgba(0,0,0,.4); }
`

const CircleButton = styled.div`
	${gradientBackground}
	border-radius: 100px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 12;
`

const LineMenu = styled.div`
	align-items: center;
	bottom: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	margin: .5vh;
	position: absolute;
	left: 10px;
	right: 10px;
	top: 17px;
	bottom: 17px;
	z-index: 13;
	/* Lines */
	& span {
		background-color: #fff;
		border-radius: 18%;
		position: initial;
		height: 4px;
		margin: 0 10%;
		width: 100%;
		z-index: 14;
		opacity: 1;
		transition-delay: .2s;
		transform: rotate(0);
		transform: translateX(0);
	}
	/* Lines width */
	& span:nth-child(2) { width: 50%; }
	& span:nth-child(3) { width: 70%; }
	/* Change Lines to an "X" */
	${props => props.active && CloseLines}
`

const List = styled.ul`
	align-items: center;
	display: flex;
	height: 8vh;
	justify-content: flex-end;
	margin: 0 50px;
	padding: 0;
	position: relative;
	width: 100%;
	& > li { display: block; font-size: 20px; margin: 0 20px; }
	& > li:hover { color: lightblue; }
`

const Item = styled.li`
	border-bottom: 0px solid rgba(255,255,255,0);
	display: block;
	font-size: 20px;
	margin: 0 20px;
	padding-bottom: 0;
	& > * { color: #636363; }
	& > *:hover {
		color: #2F80ED;
		text-decoration: none;
		border-bottom: 1px solid #2F80ED;
		padding-bottom: 5px;
	}
`

const Logo = styled.figure`
	height: 7vh;
	margin: .5vh;
	position: relative;
	width: 7vh;
	& > img {
		width: auto;
		height: 100%;
	}
`


function SSRItemsList({ items }) {
	return (
		<List>
			{items.map(({name, link}, index) => (
				<Item key={index}>
					<a href={link}>{name}</a>
				</Item>
			))}
		</List>
	)
}


function CustomList({ items }) {
	return (
		<List>
			{items.map(({name, link}, index) => (
				<Item key={index}>
					<a href={link}>{name}</a>
				</Item>
			))}
		</List>
	)
}


export default class Menu extends React.Component {
	state = { menuActive: false }

	handleMenuActive = () => {
		let {menuActive} = this.state
		return this.setState({ menuActive: !menuActive })
	}

	render() {
		const {items} = this.props
		const {menuActive} = this.state

		return (
			<NavBar>
				<Logo><img src="/static/favicon.png" /></Logo>

				<NoSSR onSSR={<SSRItemsList items={items} />}>
					<CustomList items={items} />
				</NoSSR>

				<div>
					<CircleMenu onClick={this.handleMenuActive} active={menuActive}>
						<CircleButton />
						<LineMenu active={menuActive}>
							<span />
							<span />
							<span />
						</LineMenu>
					</CircleMenu>
				</div>

			</NavBar>
		)
	}
}
