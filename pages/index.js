import React, {Component} from 'react'
import Typing, {Backspace, Delay} from 'react-typing-animation'
import {Layout, Slide} from '@utils'
import {animations} from '@assets'
import Button from '@components/button'

const background = {
	image: '/static/blackpattern.png',
	size: '525px', repeat: true,
	custom: {
		position: 'fixed',
		top: '-100vh', bottom: '-100vh',
		right: '-100vh', left: '-100vh',
		height: 'auto', width: 'auto',
		animation: `${animations.rotateBackground} 200s linear infinite`,
	}
}

const AwesomeText = styled.div`
	min-width: 900px;
	& h3 {
		background: -webkit-linear-gradient(left, #2F80ED, #56CCF2, #56CCF2, #56CCF2, #56CCF2);
		background: linear-gradient(to right, #2F80ED, #56CCF2, #56CCF2, #56CCF2, #56CCF2);
		-webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	  font-weight: 400;
	  font-size: 3.5rem;
	  margin: 0;
	}
	& h2 {
		color: #090b11;
		font-family: Space Mono;
		font-size: 12rem;
		font-weight: 600;
		letter-spacing: -5px;
		line-height: 100%;
		margin: 0;
	}
	& h2.finale { font-weight: 700; font-style: italic; text-decoration: underline; }
	& span {
    animation: none;
		color: transparent;
		font-size: 1px;
		padding-left: 0;
		opacity: 0;
		text-decoration: none;
  }
`

export default () => (
	<Layout title="Home">
		<Slide name="Welcome" background={background}>
			<AwesomeText>
				<h3>We are:</h3>
				<div style={{minHeight: '200px'}}><Typing speed={100}>
					<h2>
						Design<span />
						<Delay ms={2500} />
						<Backspace count={6} delay={750} />
						<Delay ms={500} />
						Code<span />
						<Delay ms={2500} />
						<Backspace count={4} delay={750} />
						<Delay ms={500} />
					</h2>
					<h2 className="finale">Blackome<span /></h2>
				</Typing></div>
				<Button prefetch to="/about" gradient big>Our Services</Button>
				<Button prefetch to="/about" big bold>
					Contact Us
					<img className="icon rotate" src="/static/icons/right-arrow.svg" />
				</Button>
			</AwesomeText>
		</Slide>

		<Slide name="Info"><h1>2</h1></Slide>
		<Slide name="Services"><h1>3</h1></Slide>
		<Slide name="Contact"><h1>4</h1></Slide>
	</Layout>
)

