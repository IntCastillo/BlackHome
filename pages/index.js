import React from 'react'
import {Flex} from 'grid-styled'
import styled, {css} from 'styled-components'
// Components
import {Layout, Assets} from '@/components'


const FullScreenBox = styled(Flex).attrs({
	pt: '8vh',
	width: '100vh',
	align: "center",
	justify: "center",
	wrap: true,
})`
	height: 100vh;
	padding-top: 8vh;
	width: 100vh;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	display: flex;
	margin: 0 auto;
`


const SubTitle = styled.h3`
	color: #2F80ED;
 	font-size: 64px;
	-webkit-background-clip: text;
 	-webkit-text-fill-color: transparent;
 	font-weight: 300;
 	margin: 0;
	${Assets.gradient}
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
	const {Button, gradient} = Assets
	// const Button = Assets('Button')

	return (
		<section name="Home">
			<Flex align="center" justify="center" wrap>
				<FullScreenBox id="welcome">
					<div>
						<SubTitle> We are</SubTitle>
						<Title>Blackome</Title>
						<Button primary>Our Services</Button>
						<Button>Contact Us</Button>
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
			{ name: 'Welcome', link: 'welcome' },
			{ name: 'Info', link: 'info' },
			{ name: 'Services', link: 'services' },
			{ name: 'Contact', link: 'contact' },
		]}
	><Home /></Layout>
)
