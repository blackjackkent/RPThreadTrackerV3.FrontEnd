import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.aside`
	color: ${colors.GRAY_100};
	background: ${colors.GRAY_900} a {
		color: ${colors.LIGHT_BLUE};
	}
	hr {
		border-top: 1px solid ${colors.GRAY_600};
	}
	.callout .badge {
		position: absolute;
		right: 30px;
		bottom: 15px;
	}
	.light-theme & {
		color: ${colors.GRAY_800};
		background: ${colors.GRAY_050} a {
			color: ${colors.BASE_BLUE};
		}
		hr {
			border-top: 1px solid ${colors.GRAY_200};
		}
	}
`;
