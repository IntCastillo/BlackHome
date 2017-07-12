import React from 'react'
import styled, {css} from 'styled-components'
// Components
import {Layout} from '@/components'


const gradientBackground = css`
	background-image: linear-gradient(to right, #CC21AD, #EB7517);
	background-image: -webkit-linear-gradient(left, #CC21AD, #EB7517);
`

const Row = styled.section`
	/*border: 3px solid #f55;*/
	display: inline-block;
	padding: 0 ${props => props.padding || '5'}%;
	position: ${props => props.fixed ? 'fixed' : 'relative'};
	width: ${props => props.size || '100'}%;
`

const Container = styled.article`
	/*border: 3px solid #5f5;*/
	display: flex;
	align-items: center;
	justify-content: ${props => props.center ? 'center' : 'initial'};
	height: 100vh;
	margin: 0;
	position: relative;
	width: 100%;
`

const Items = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-end;
	position: relative;
	width: 100%;
`

const Item = styled.a`
	border-bottom-left-radius: 50px;
	border-top-left-radius: 50px;
	color: #${props => props.active ? 'ffffff' : '636363'};
	display: block;
	flex-basis: 60%;
	font-size: ${props => props.active ? '2.8' : '2.4'}em;
	font-weight: ${props => props.active ? '400' : '300'};
	margin-top: 25px;
	padding: 18px ${props => props.active ? '105' : '90'}px 18px 90px;
	text-align: right;
	${props => props.active && gradientBackground}
	&:hover {
		padding-right: ${props => props.active ? '150' : '90'}px;
	}
`

const Title = styled.div`
	font-size: 50px;
	& > small {
		${gradientBackground}
		background-clip: text;
		-moz-background-clip: text;
		-webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
		color: #CC21AD;
		font-size: 1.2em;
		line-height: 0%;
	}
	& > h2 {
		text-decoration: underline;
		font-size: 3.5em;
		margin-top: 100px;
		font-family: Space Mono;
		font-weight: bold;
		font-style: italic;
		line-height: 0%;
		letter-spacing: -8px;
	}
`


export default ({ isServer }) => (
	<Layout title="Home" background="/static/pattern-black-2.png">
		<Row size="70">
			<Container id="welcome">
				<Title>
					<small>We are</small>
					<h2>Blackome</h2>
				</Title>
			</Container>
			<Container id="description" center>
				Description
			</Container>
		</Row>
		<Row size="30" padding="0" fixed>
			<Container>
				<Items>
					<Item href="#welcome" active>Welcome</Item>
					<Item href="#description">Description</Item>
					<Item href="#services">For you</Item>
					<Item href="#join-us">Join Us</Item>
				</Items>
			</Container>
		</Row>
	</Layout>
)
