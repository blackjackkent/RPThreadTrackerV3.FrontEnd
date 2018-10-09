import styled from 'styled-components';
import { Card } from 'reactstrap';
import colors from '../../../infrastructure/constants/colors';

export default styled(Card)`
	color: ${props => (props.light ? colors.GRAY_850 : colors.GRAY_100)}
	a {
		color: ${colors.BASE_BLUE}
	}
	a.btn-primary {
		color: ${colors.WHITE}
	}
`;
