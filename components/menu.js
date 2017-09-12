import {Component} from 'react'
import Link from 'next/link'
import {prop, ifProp} from 'styled-tools'


// Opaque background
const Blur = styled.div`
	background-color: rgba(255,255,255,.8);
	position: fixed;
	top: 0; bottom: 0;
	left: 100vw; right: 0;
	transition-duration: .6s;
	z-index: 1;
	&.active { left: 0; }
`
// Sidebar
const Sidebar = styled.div`
	align-items: flex-start;
	background-color: #56CCF2;
	background-image: linear-gradient(to bottom, #2F80ED, #56CCF2);
	bottom: 0;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	justify-content: center;
	position: fixed;
	right: -325px;
	top: 0;
	transition: all .6s ease-in-out;
	transition-delay: 0;
	width: 325px;
	z-index: 2;
	&.active { right: 0; transition-delay: .3s; }
	& h2, & ul { width: 100%; }
	& h2 {
		color: #FFFFFF;
		margin: 25px;
		height: 40px;
		font-weight: 500;
	}
	& ul {
		margin: 0;
		padding: 0 0 0 25px;
		font-weight: 400;
		list-style: none;
		text-align: left;
	}
	& .inside-links {
		font-size: 22px;
		line-height: 3;
		margin-bottom: 50px;
	}
	& .social-links {
		font-size: 20px;
		line-height: 2;
		margin-bottom: 400px;
	}
	& .social-links li { display: flex; align-items: center; }
	& .social-links img {
		height: 20px;
		width: 20px;
		margin-right: 10px;
	}
	& ul a {
		border-bottom: 1px solid transparent;
		color: #FFFFFF;
		padding-left: 0;
		text-decoration: none;
	}
	& ul a:hover { font-weight: 500; border-bottom-color: #fff; padding-left: 5px; }
`
// Buttons
const HamLine = styled.div`
	background: #fff;
	border-radius: 20%;
	height: 3px;
	left: 25%;
	position: absolute;
	right: 25%;
	&:nth-child(1) { top: 38%; width: 50%; margin-left: 0%; }
	&:nth-child(2) { top: 50%; width: 30%; margin-left: 20%; }
	&:nth-child(3) { top: 62%; width: 37.5%; margin-left: 12.5%; }
	.active & { position: absolute; width: 45%; left: 27.5%; right: 27.5%; margin-left: 0; }
	.active &:nth-child(1) { transition-delay: .3s; transform: rotate(-45deg); top: 48%; }
	.active &:nth-child(2) { transform: translateX(20px); opacity: 0; }
	.active &:nth-child(3) { transition-delay: .3s; transform: rotate(45deg); top: 48%; }
`
const HamButton = styled.div`
	padding: 12.5px;
	& .circle-menu {
		background-color: #56CCF2;
		background-color: #2F80ED;
		background-image: linear-gradient(to right, #2F80ED, #56CCF2);
		border-radius: 50%;
		box-shadow: 2px 2px 6px 0px rgba(0,0,0,.3);
		cursor: pointer;
		height: 100%;
		position: relative;
		transform: translateX(0) rotate(0deg);
		transition: all .9s ease-in-out;
		width: 100%;
		z-index: 3;
	}
	& .circle-menu:hover { box-shadow: 1px 1px 10px rgba(0,0,0,.4); }
	& .circle-menu.active { transform: translateX(-275px) rotate(-360deg); }
`
const Logo = styled.figure`
	padding: 7.5px;
	& img { height: 100%; width: 100%; transform: rotate(0); }
	&:hover img { cursor: pointer; transform: rotate(180deg); }
`
// Container
const Nav = styled.nav`
	align-items: center;
	display: flex;
	height: 80px;
	justify-content: space-between;
	position: fixed;
	top: 0; left: 0; right: 0;
	z-index: 2;
	& ${Logo},
	& ${HamButton} {
		background-color: #FFF;
		border-radius: 4px;
		height: 100%;
		margin: 0 10px;
		width: 80px;
	}
`


class Menu extends Component {
	state = { menuActive: false }

	handleMenuActive = () => this.setState({ menuActive: !this.state.menuActive })

	render() {
		const {menuActive} = this.state

		return (
			<Nav>
				<Logo>
					<img src="/static/logo.png" />
				</Logo>
				<HamButton onClick={this.handleMenuActive}>
					<div className={`circle-menu ${menuActive && 'active'}`}>
						<HamLine /> <HamLine /> <HamLine />
					</div>
				</HamButton>
				<Sidebar className={menuActive && 'active'}>
					<h2>Blackome Digital</h2>
					<ul className="inside-links">
						<li><Link href="/" prefetch><a>Home</a></Link></li>
						<li><Link href="/about" prefetch><a>About us (we are)</a></Link></li>
						<li><Link href="/services" prefetch><a>Our Services</a></Link></li>
						<li><Link href="/contact" prefetch><a>Contact Us</a></Link></li>
					</ul>
					<ul className="social-links">
						<li>
							<img src="/static/icons/facebook.svg" />
							<a href="https://facebook.com/BlackomeDigital" target="_blank">Facebook</a>
						</li>
						<li>
							<img src="/static/icons/twitter.svg" />
							<a href="https://twitter.com/BlackomeDigital" target="_blank">Twitter</a>
						</li>
						<li>
							<img src="/static/icons/instagram.svg" />
							<a href="https://instagram.com/BlackomeDigital" target="_blank">Instagram</a>
						</li>
						<li>
							<img src="/static/icons/youtube.svg" />
							<a href="https://youtube.com/user/BlackomeDigital" target="_blank">Youtube</a>
						</li>
					</ul>
				</Sidebar>
				<Blur className={menuActive && 'active'} />
			</Nav>
		)
	}
}


export default Menu
