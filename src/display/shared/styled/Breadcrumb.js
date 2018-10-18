import styled from 'styled-components';
import { Breadcrumb } from 'reactstrap';
import colors from '../../../infrastructure/constants/colors';

export default styled(Breadcrumb)`
	border-bottom: none;
	margin-bottom: 0;
	background-color: ${colors.GRAY_900}
	a {
		color: ${colors.LIGHT_BLUE}
	}
	.breadcrumb-item::before {
		color: ${colors.GRAY_100}
	}
	.light-theme & {
		background-color: ${colors.GRAY_100}
		a {
			color: ${colors.DARK_BLUE}
		}
	}
`;
