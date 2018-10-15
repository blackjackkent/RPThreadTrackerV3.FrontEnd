import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	color: ${colors.GRAY_100};
	.public-header {
		position: relative;
		margin-bottom: 30px; 
		margin-top: 10px; 
		padding: 5px; 
		border-bottom: 1px solid ${colors.BASE_BLUE};
		
		ul { text-align: right; margin-right: 10px; }
		.navbar-brand {
			color: ${colors.WHITE};
			line-height: 50px;
			text-transform: uppercase;
			height: 50px;
			margin: 0;
			padding: 0;
		}
		h1 {
			font-size: 1.5rem;
		}
	}
	.app-footer { 
		margin: 0; 
		background: none; 
		border: none; 
	}
	.light-theme & {
		color: ${colors.GRAY_800};
		.navbar-brand {
			color: ${colors.GRAY_800};
		}
	}
`;
