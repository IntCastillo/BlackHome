import styled, {css} from 'styled-components'

const gradient = css`
	background-image: linear-gradient(to right, #2F80ED, #56CCF2);
	background-image: -webkit-linear-gradient(left, #2F80ED, #56CCF2);
`

const Button = styled.a`
	background-color: ${props => !props.primary ? '#FFFFFF' : '#2F80ED'};
	border-radius: 50px;
	box-shadow: 1px 3px 7px rgba(0,0,0,0);
	color: ${props => !props.primary ? '#2F80ED' : '#FFFFFF'};
	display: inline-block;
	position: relative;
	font-weight: 500;
	margin: 50px 10px;
	padding: 10px 50px;
 	font-size: 20px;
 	${props => props.primary && gradient}
 	&:hover { box-shadow: 3px 5px 8px rgba(86, 204, 242, 0.75); }
 	&:before {
 		content: '';
		border-radius: 50px;
 		position: absolute;
 		top:-3px;
 		left:-3px;
 		right:-3px;
 		bottom:-3px;
 		${gradient}
 		opacity: ${props => !props.primary ? '1' : '0'};
 		z-index: -1;
	}
`


export default {
	gradient,
	Button
}

