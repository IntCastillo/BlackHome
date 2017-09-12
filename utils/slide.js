import {Slide as OldSlide} from 'react-full-page'
import {ifProp, prop} from 'styled-tools'

const StyledSlide = styled(OldSlide)`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	justify-content: center;
	min-height: 100vh;
	padding: 80px;
	position: relative;
	touch-action: none;
`
const Background = styled.div`
	background-color: ${prop('color', '#FFFFFF')};
	background-image: url(${prop('image')});
	background-repeat: ${ifProp('repeat', 'repeat', 'no-repeat')};
	background-position: center;
	background-size: ${prop('size', 'initial')};
	height: 100%;
	position: absolute;
	width: 100%;
	z-index: -1;
	opacity: .2;
	${ifProp('transparent', 'background: transparent !important;')}
	${prop('custom')}
	&:before {
    content: '';
		position: absolute;
		top: 0; right: 0;
		bottom: 0; left: 0;
		background-image:
			linear-gradient(
				to bottom right,
				${prop('gradient', '#FFFFFF, #eee')}
			)
		;
		opacity: .8; 
  }
`
function Slide({children, background}) {
	return (
		<StyledSlide>
			{children}
			{background && <Background {...background} />}
		</StyledSlide>
	)
}

export default Slide
