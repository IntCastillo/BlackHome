import React from 'react'
import Head from 'next/head'
import styled, {injectGlobal} from 'styled-components'

injectGlobal`
	body {
		background-color: #fff;
	}
`


const AboveContainer = styled.div`
	display: flex;
	align-items: center;
	/*justify-content: center;*/
	padding-left: 5%;
	padding-right: 5%;
	height: 100vh;
`

const Background = styled.div`
	background-color: #FFFFFF;
	background-image: url(/static/pattern-black-2.png), linear-gradient(to right,rgba(255,255,255,1) 20%,rgba(230,230,230,1) 99%);
	background-repeat: repeat;
	background-size: 300px;
	opacity: .03;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
`

const ItemContainer = styled.div`
	position: absolute;
	right: 0;
	font-family: Quicksand, sans-serif;
	font-size: 48px;
	display: flex;
	align-items: center;
	width: 500px;
	flex-wrap: wrap;
	height: 500px;
`

const Item = styled.div`
	background-image: ${props => props.active && '-webkit-linear-gradient(left, #cc21ad 0%,#eb7517 99%)'};
	background-image: ${props => props.active && 'linear-gradient(to right, #cc21ad 0%,#eb7517 99%)'};
	border-top-left-radius: 50px;
	border-bottom-left-radius: 50px;
	box-shadow: 2px 2px 20px rgba(0,0,0,.25);
	color: ${props => props.active ? '#fff' : '#636363'};
	padding: 15px 80px;
	display: block;
	position: absolute;
	right: 0;
	min-width: 250px;
`

const LinearSubTitle = styled.h3`
	background-image: -webkit-linear-gradient(left, #cc21ad 0%,#eb7517 99%);
	background-image: linear-gradient(to right, #cc21ad 0%,#eb7517 99%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #CC21AD;  
	display: inline;
	font-family: Quicksand, sans-serif;
	font-size: 44px;
	font-weight: 500;
`

const ChangeTitle = styled.h3`
	color: #090b11;
	font-family: Space Mono, sans-serif;
	font-size: 110px;
	font-weight: 700;
	letter-spacing: -5px;
	line-height: 95%;
	margin: 0;
	text-decoration: ${props => props.principal ? 'underline' : 'false'};
	font-style: ${props => props.principal ? 'italic' : 'normal'};
`

const LinearButton = styled.a`
	background-image: -webkit-linear-gradient(left, #cc21ad 0%,#eb7517 99%);
	background-image: linear-gradient(to right, #cc21ad 0%,#eb7517 99%);
	border-radius: 50px;
	color: #fff;
	font-family: Quicksand, sans-serif;
	font-size: 16px;
	font-weight: 600;
	margin-top: 50px;
	display: inline-block;
	padding: 10px 30px;
`


class Test extends React.Component {
	render() {
		return (
			<AboveContainer>
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700|Space+Mono:400,700,700i"
						rel="stylesheet"
					/>
				</Head>
				<div>
					<LinearSubTitle>We are</LinearSubTitle>
					<ChangeTitle principal>Blackome</ChangeTitle>
					<LinearButton>Our Services</LinearButton>
				</div>
				<ItemContainer>
					<Item active>Welcome</Item>
				</ItemContainer>
				<Background />
			</AboveContainer>
		)
	}
}

export default Test
