import {Component} from 'react'
import {FullPage, Slide, withControls} from 'react-full-page'



const StyledFooter = styled.div`
	border-top: 1px solid rgba(224, 224, 224,.5);
	background-color: rgba(255,255,255,.95);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 75px;
`
const Tab = styled.a`
	border-bottom: 3px solid transparent;
	color: #636363;
	cursor: pointer;
	height: 100%;
	display: flex;
	font-size: 20px;
	font-weight: 400;
	justify-content: center;
	align-items: center;
	padding: 0 50px;
	min-width: 175px;
	&:hover { color: #d6d6d6; border-bottom-color: #d6d6d6; }
	&.active { color: #2f80ed; border-bottom-color: #2f80ed; font-weight: 700; }
`

export default withControls(({slides, ...controls}) => {
  const {
    scrollToSlide,
    scrollNext,
    scrollPrev,
    getSlidesCount,
    getCurrentIndex,
  } = controls
  const totalSlides = getSlidesCount()
  const activeSlide = getCurrentIndex()
  const tabs = []

  for (let i = 0; i < totalSlides; i++) {
    tabs.push({
			key: i,
			className: activeSlide === i && 'active',
		  onClick: () => scrollToSlide(i),
      children: slides[i],
  	})
  }

  return (
  	<StyledFooter>
  		{tabs.map((tab, i) => <Tab key={i} {...tab} />)}
  	</StyledFooter>
  )
})
