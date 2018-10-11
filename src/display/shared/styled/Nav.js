import { Nav } from 'reactstrap';
import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled(Nav)`
	padding-top: 1rem;

	.nav-link {
		color: ${colors.WHITE};
		padding: 10px;
		margin-bottom: 10px;
	}
	.nav-link.active {
		background: ${colors.GRAY_600};
	}
	.nav-link:hover {
		background: ${colors.GRAY_700};
	}

	.light-theme & {
		.nav-link {
			color: ${colors.GRAY_800};
		}
		.nav-link.active {
			background: ${colors.GRAY_100};
		}
		.nav-link:hover {
			background: ${colors.GRAY_200};
		}
	}
`;
