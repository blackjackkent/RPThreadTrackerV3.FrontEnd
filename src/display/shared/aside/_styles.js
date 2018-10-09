import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.aside`
	color: ${colors.GRAY_100};
	background: ${colors.GRAY_900}
	hr {
		border-top: 1px solid ${colors.GRAY_600};
	}
	.light-theme & {
		color: ${colors.GRAY_800};
		background: ${colors.GRAY_050}
		hr {
			border-top: 1px solid ${colors.GRAY_200};
		}
	}
`;
