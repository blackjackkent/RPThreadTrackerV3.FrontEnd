import styled from 'styled-components';
import { Card } from 'reactstrap';
import colors from '../../../infrastructure/constants/colors';

export default styled(Card)`
	color: ${colors.GRAY_100}
	background: ${colors.GRAY_900}
	border: 1px solid ${colors.GRAY_800}
	.card-header {
		background: ${colors.BLACK}
		border-bottom: 1px solid ${colors.GRAY_800}
	}
	.card-footer {
		background: ${colors.BLACK}
		border-bottom: 1px solid ${colors.GRAY_800}
	}
	a {
		color: ${colors.BASE_BLUE}
	}
	a.btn-primary {
		color: ${colors.WHITE}
	}
	hr {
		border-top: 1px solid ${colors.GRAY_600};
	}
	.light-theme & {
		color: ${colors.GRAY_850}
		background: ${colors.GRAY_050}
		border: 1px solid ${colors.GRAY_100}
		.card-header {
			background: ${colors.GRAY_100}
			border-bottom: 1px solid ${colors.GRAY_050}
		}
		.card-footer {
			background: ${colors.GRAY_100}
			border-bottom: 1px solid ${colors.GRAY_050}
		}
		hr {
			border-top: 1px solid ${colors.GRAY_200};
		}
	}
`;
