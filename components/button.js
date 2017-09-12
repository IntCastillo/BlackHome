import Link from 'next/link'
import styled from 'styled-components'
import {animations} from '@assets'
import {prop, ifProp} from 'styled-tools'


export default function Button({to, prefetch, children, ...props}) {
	const StyledButton = styled.a`
		${ifProp('gradient', 'background: -webkit-linear-gradient(left, #2F80ED, #56CCF2);')}
		${ifProp('gradient', 'background: linear-gradient(left, #2F80ED, #56CCF2);')}
		background-color: ${ifProp('dark', '#2f80ed', ifProp('light', '#56ccf2', 'transparent'))};

		border-radius: 32px;
		color: ${props => (!props.dark && !props.light && !props.gradient) ? '#2f80ed' : '#FFF'};

		font-size: ${ifProp('big', '22px', '16px')};
		font-weight: ${ifProp('bold', '700', ifProp('big', '500', '400'))};

		margin-right: 15px;
		padding: ${ifProp('big', '15px 56px', '12px 32px')};
		text-decoration: none;

		${props => (props.dark || props.light || props.gradient) && 'box-shadow: 1px 3px 4px #ddd;' }
		&:hover {
			text-decoration: underline;
			${props => (props.dark || props.light || props.gradient) && 'box-shadow: 3px 5px 3px #ddd;' }
		}

		& .icon {
			animation: ${animations.unestable} 1.2s linear infinite;
			animation-direction: alternate;
			height: 20px;
			margin-left: 10px;
			width: 20px;
		}
		& .icon.rotate { transform: rotate(0); }
		&:hover .icon.rotate { transform: rotate(-360deg); }
	`

	return (
		<Link prefetch={prefetch} href={to} passHref>
			<StyledButton {...props}>{children}</StyledButton>
		</Link>
	)
}
