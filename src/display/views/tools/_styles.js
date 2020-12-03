import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	color: ${colors.GRAY_100};
	.manage-tags-pane {
		#manage-tags-updated-value-input {
			margin: 10px;
		}
		label {
			margin: 0;
		}
		.choice-row {
			background: #333;
			margin: 10px;
			margin-top: 0;
			padding: 10px;
		}
		.back-button {
			background: none;
			border: none;
			color: ${colors.BASE_BLUE};
		}
		.back-button:hover {
			text-decoration: underline;
		}
	}
	.light-theme & {
		color: ${colors.GRAY_800};
	}
`;
