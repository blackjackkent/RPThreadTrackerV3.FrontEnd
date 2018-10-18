import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.span`
	& input, select, input:focus, select:focus {
		padding: 4px 7px;
		height: 28px;
		font-size: 12px;
		line-height: 1.5;
		color: ${colors.GRAY_100};
		background-color: ${colors.GRAY_500};
		background-image: none;
		border: 1px solid ${colors.GRAY_400};
		border-radius: 4px;
		transition: border 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.light-theme & input, 
	.light-theme & select, 
	.light-theme & input:focus, 
	.light-theme & select:focus {
		color: ${colors.GRAY_800};
		background-color: ${colors.GRAY_100}
		border: 1px solid ${colors.GRAY_200}
	}
`;
