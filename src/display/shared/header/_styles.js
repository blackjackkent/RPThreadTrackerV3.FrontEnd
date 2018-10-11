import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.header`
&.app-header.navbar {
	background-color: ${colors.BASE_BLUE};
	border-bottom: 1px solid ${colors.DARK_BLUE};
	padding-right: 30px;
	.navbar-brand {
		color: ${colors.WHITE};
		background-color: ${colors.BASE_BLUE};
		border: none;
		background-image: none;
		font-size: 16px;
		line-height: 38px;
		height: 53px;
	}
	.navbar-toggler {
		color: ${colors.WHITE}
	}
	.navbar-nav {
		button {			
			border: 1px solid ${colors.WHITE};
			border-radius: 5px;
			margin-right: 10px;
			margin: 0;
			padding: 10px 20px;
			display: block;
		}
		.nav-link {
			color: ${colors.WHITE}
			border: 0;
			&:hover {
				color: ${colors.GRAY_100}
			}
		}
	}
}
	
@media (max-width: 991px) {
    &.app-header {
		.navbar-brand {
			position: relative;
			left: auto;
			margin: 0;
		}
	}
}
`;
