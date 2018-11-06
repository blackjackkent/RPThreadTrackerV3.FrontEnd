import { Nav } from 'reactstrap';
import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled(Nav)`
	padding-top: 1rem;

	.nav-item a {
		color: ${colors.WHITE};
		padding: 10px;
		margin-bottom: 10px;
		display: block;
	}
	.nav-item a.active {
		background: ${colors.GRAY_600};
	}
	.nav-item a:hover {
		background: ${colors.GRAY_700};
		text-decoration: none;
	}

	.light-theme & {
		.nav-item a {
			color: ${colors.GRAY_800};
		}
		.nav-item a.active {
			background: ${colors.GRAY_100};
		}
		.nav-item a:hover {
			background: ${colors.GRAY_200};
		}
	}
`;
