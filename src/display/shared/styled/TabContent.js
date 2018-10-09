import styled from 'styled-components';
import { TabContent } from 'reactstrap';
import colors from '../../../infrastructure/constants/colors';

export default styled(TabContent)`
	background: none;
	color: ${colors.GRAY_100};
	border: none;
	border-top: none;
`;
