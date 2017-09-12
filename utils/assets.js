import {keyframes} from 'styled-components'


const animations = {}
animations.rotateBackground = keyframes`
	from {
		background-position: 0;
		transform: rotate(0);
	} to {
		background-position: 150vw 150vh;
		transform: rotate(-180deg);
	}
`
animations.unestable = keyframes`
	0% { margin-left: 10px }
	50% { margin-left: 17px; }
	80% { margin-left: 12px; }
	100% { margin-left: 20px; }
`
export {animations}
