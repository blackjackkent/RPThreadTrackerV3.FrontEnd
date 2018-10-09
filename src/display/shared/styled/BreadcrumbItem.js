import styled from 'styled-components';
import { BreadcrumbItem } from 'reactstrap';
import colors from '../../../infrastructure/constants/colors';

export default styled(BreadcrumbItem)`
	&::before {
		color: ${colors.GRAY_100}
	}
	&.active {
		color: ${colors.GRAY_100}
	}
	.light-theme &::before,
	.light-theme &.active {
		color: ${colors.GRAY_800}
	}
`;
