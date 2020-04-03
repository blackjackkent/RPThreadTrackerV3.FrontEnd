import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.footer`
	background: ${colors.GRAY_900};
	color: ${colors.GRAY_100};
	border-top: 1px solid ${colors.GRAY_600};
	margin-top: 30px;
	a {
		color: ${colors.LIGHT_BLUE};
	}
	button {
		background: none;
		border: none;
		color: ${colors.BASE_BLUE};
		display: inline;
		outline: none;
		margin: 0;
		padding: 0;
	}
	.light-theme & {
		background: ${colors.GRAY_100};
		color: ${colors.GRAY_800};
		border-top: none;
		a {
			color: ${colors.BASE_BLUE};
		}
	}
`;
