import styled from 'styled-components';
import { Card } from 'reactstrap';
import colors from '../../../infrastructure/constants/colors';

export default styled(Card)`
	color: ${colors.GRAY_100}
	a {
		color: ${colors.BASE_BLUE}
	}
	a.btn-primary {
		color: ${colors.WHITE}
	}
	.light-theme & {
		color: ${colors.GRAY_850}
	}
`;
