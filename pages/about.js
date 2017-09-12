import React, {Component} from 'react'
import {Layout, Slide} from '@utils'
import {animations} from '@assets'

// Page
function About() {
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
	return (
		<Layout>
			<Slide name="Welcome"><h1>About</h1></Slide>
			<Slide name="Info"><h1>2</h1></Slide>
			<Slide name="Services"><h1>3</h1></Slide>
			<Slide name="Contact"><h1>4</h1></Slide>
		</Layout>
	)
}

export default About


// import {Component} from 'react'
// import Menu from '@components/menu'
// // import Footer from '@components/footer'
// import { ScrollPage, Section } from 'react-scrollpage'
// import {Element} from 'react-scroll'

// const StyledElement = styled(Element)`
// 	align-items: center;
// 	display: flex;
// 	height: 100%;
// 	justify-content: center;
// 	padding: 80px;
// `

// function Slide({children}) {
// 	return (
// 		<Section>
// 			<StyledElement style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// 			{children}
// 			</StyledElement>
// 		</Section>
// 	)
// }

// class About extends Component {
// 	render() {
// 		const options = {
// 			onPageChange: function() {},
// 		  curPage: 1,
// 		  totalPage: 4,
// 		  delay: 500,
// 		}

// 		return (
// 			<main>
// 				<Menu />
// 				<ScrollPage {...options}>
// 					<Slide>
// 					Welcome
// 					</Slide>
// 			    <Slide>
// 			      Info
// 			    </Slide>
// 			    <Slide>
// 			      Services
// 			    </Slide>
// 			    <Slide>
// 			      Contact
// 			    </Slide>
// 					{<Footer />}
// 			  </ScrollPage>
// 	  	</main>
// 		)
// 	}
// }

// export default About



// // class Layout extends Component {
// // 	state = { loaded: false };

// // 	componentDidMount() {
// // 		Events.scrollEvent.register('begin')
// // 		Events.scrollEvent.register('end')
// // 		scrollSpy.update()
// // 		this.setState({ loaded: true })
// // 	}
// // 	componentWillUnmount() {
// //     Events.scrollEvent.remove('begin')
// //     Events.scrollEvent.remove('end')
// // 		this.setState({ loaded: false })
// //   }

// // 	render() {
// // 		const {loaded} = this.state
// // 		const {title, children} = this.props

// // 		return (
// // 			<main role="application">
// // 				<Head>
// // 					<title>Blackome Digital | {title || 'Digital Agency'}</title>
// // 					{loaded && <link rel="stylesheet" href="https://goo.gl/dYYWqf" />}
// // 				</Head>
// // 				<FullPage>
// // 					<Menu />
// // 					<FullPage>
// // 						{children}
// // 					</FullPage>
// // 					{<Footer />}
// // 				</FullPage>
// // 			</main>
// // 		)
// // 	}
// // }


