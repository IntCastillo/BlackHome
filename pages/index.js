import React from 'react'
import {Flex} from 'grid-styled'
import styled, {css} from 'styled-components'
// Components
import {Layout} from '@/components'


const FullScreenBox = styled(Flex).attrs({
	pt: '8vh',
	width: '100vh',
	align: "center",
	justify: "center",
	wrap: true
})` height: 100vh;`


const gradientBackground = css`
	background-image: linear-gradient(to right, #2F80ED, #56CCF2);
	background-image: -webkit-linear-gradient(left, #2F80ED, #56CCF2);
`

const StyledButton = styled.a`
	background-color: ${props => props.inverted ? '#FFFFFF' : '#2F80ED'};
	border-radius: 50px;
	box-shadow: 1px 3px 7px rgba(0,0,0,0);
	color: ${props => props.inverted ? '#2F80ED' : '#FFFFFF'};
	display: inline-block;
	position: relative;
	font-weight: 500;
	margin: 50px 10px;
	padding: 10px 50px;
 	font-size: 20px;
 	${props => !props.inverted && gradientBackground}
 	&:hover { box-shadow: 3px 5px 8px rgba(86, 204, 242, 0.75); }
 	&:before {
 		content: '';
		border-radius: 50px;
 		position: absolute;
 		top:-3px;
 		left:-3px;
 		right:-3px;
 		bottom:-3px;
 		${gradientBackground}
 		opacity: ${props => props.inverted ? '1' : '0'};
 		z-index: -1;
 	}
`

const SubTitle = styled.h3`
	color: #2F80ED;
 	font-size: 64px;
	-webkit-background-clip: text;
 	-webkit-text-fill-color: transparent;
 	font-weight: 300;
 	margin: 0;
	${gradientBackground}
`

const Title = styled.h1`
	color: #090b11;
 	font-weight: 700;
 	font-size: 160px;
 	font-family: Space Mono;
 	display: block;
 	margin: 0;
	line-height: 90%;
	letter-spacing: -8px;
 	font-style: italic;
 	text-decoration: underline;
`



function Home() {
	return (
		<section name="Home">
			<Flex align="center" justify="center" wrap>
				<FullScreenBox id="welcome">
					<div>
						<SubTitle>We are</SubTitle>
						<Title>Blackome</Title>
						<StyledButton>Our Services</StyledButton>
						<StyledButton inverted>Contact Us</StyledButton>
					</div>
				</FullScreenBox>
				<FullScreenBox id="info">Information</FullScreenBox>
				<FullScreenBox id="services">Our Services</FullScreenBox>
				<FullScreenBox id="contact">Work with us</FullScreenBox>
			</Flex>
		</section>
	)
}


export default () => (
	<Layout
		title="Home"
		background={{
			image: "/static/pattern-black.png",
		}}
		menuItems={[
			{ name: 'Welcome', link: '#welcome' },
			{ name: 'Info', link: '#info' },
			{ name: 'Services', link: '#services' },
			{ name: 'Contact', link: '#contact' },
		]}
	><Home /></Layout>
)
