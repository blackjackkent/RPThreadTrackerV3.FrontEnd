import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	color: ${colors.GRAY_100};
	.light-theme & {
		color: ${colors.GRAY_800};
	}
`;
