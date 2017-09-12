import { Component } from 'react'
import { FullPage } from 'react-full-page'
import Head from 'next/head'
import Menu from '@components/menu'
import Footer from '@components/footer'


class Layout extends Component {
	state = { loaded: false };


	componentDidMount() { this.setState({ loaded: true }) }
	componentWillUnmount() { this.setState({ loaded: false }) }

	render() {
		const {loaded} = this.state
		const {title, children} = this.props
		const slideNames = children.map(({props}) => props.name)

		return (
			<main role="application">
				{<Head>
					<title>Blackome Digital | {title || 'Digital Agency'}</title>
					{loaded && <link rel="stylesheet" href="https://goo.gl/dYYWqf" />}
				</Head>}
				{<Menu />}
				<FullPage>
					{children}
					{<Footer slides={slideNames} />}
				</FullPage>
			</main>
		)
	}
}


export default Layout

