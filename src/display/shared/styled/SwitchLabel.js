import styled from 'styled-components';
import { Label } from 'reactstrap';
import colors from '../../../infrastructure/constants/colors';

export default styled(Label)`
	>.switch-input:checked~.switch-label {
		background: ${colors.BASE_BLUE} !important;
		border-color: ${colors.DARK_BLUE};
	}	
`;
