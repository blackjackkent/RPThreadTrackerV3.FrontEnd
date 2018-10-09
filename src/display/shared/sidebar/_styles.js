import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	color: ${colors.GRAY_400};
	background: ${colors.WHITE};
	border-right: 1px solid ${colors.GRAY_200};
	.nav {
		.nav-title {
			color: ${colors.GRAY_600}
		}
		.nav-item {
			.nav-link {
				color: ${colors.GRAY_600}
				i {
					color: ${colors.GRAY_600}
				}
				&.active {
					background: ${colors.GRAY_050};
					color: ${colors.GRAY_600};
					i {
						color: ${colors.LIGHT_BLUE};
					}
				}
				&:hover {
					color: ${colors.WHITE}
					background: ${colors.DARK_BLUE}
					i {
						color: ${colors.WHITE}
					}
				}
			}
		}
	}
`;
