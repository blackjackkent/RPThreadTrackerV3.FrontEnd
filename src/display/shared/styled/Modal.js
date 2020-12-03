import styled from 'styled-components';
import { Modal } from 'reactstrap';
import colors from '../../../infrastructure/constants/colors';

export default styled(Modal)`
	color: ${colors.GRAY_800};
	.form-text {
		opacity: 0.8;
	}
	.form-control {
		border: 1px solid ${colors.GRAY_200};
	}
	.form-control-label {
		font-weight: bold;
		opacity: 0.8;
		width: 100%;
	}
	.multiple-value-text-input-item-container {
		padding: 0.5rem 0 0;
		.multiple-value-text-input-item {
			border-radius: 5px;
		}
	}
	.public-view-form-turn-section {
		padding: 15px 0;
		background: #ddd;
	}
`;
