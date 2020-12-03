import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	border-bottom: 1px solid ${colors.GRAY_600};
	margin-bottom: 1.5rem;
	background-color: ${colors.GRAY_900};
	.light-theme & {
		background-color: ${colors.GRAY_100};
		border-bottom: none;
	}
`;
