import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.header`
&.app-header.navbar {
	background-color: ${colors.BASE_BLUE};
	border-bottom: 1px solid ${colors.DARK_BLUE};
	.navbar-brand {
		color: ${colors.WHITE};
		background-color: ${colors.BASE_BLUE};
		border: none;
	}
	.navbar-toggler {
		color: ${colors.WHITE}
	}
	.navbar-nav {
		.nav-link {
			color: ${colors.WHITE}
			&:hover {
				color: ${colors.GRAY_100}
			}
		}
	}
}
`;