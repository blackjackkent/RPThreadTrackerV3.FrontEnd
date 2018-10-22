import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	.at-a-glance-card > .card-body { padding: 0; }
	.at-a-glance-card > .card-body .card {  
		cursor: pointer; 
		margin-bottom: 0; 
		border: none; 
		border-bottom: 1px solid ${colors.GRAY_800}; 
		border-right: 1px solid ${colors.GRAY_800}; 
	}
	.at-a-glance-card > .card-body .card:hover { 
		color: ${colors.GRAY_200}; 
	}
	.dashboard-summary-widget-card-body .lds-css { 
		position: absolute; 
		right: 90px; 
	}
	.recent-activity-card .row,
	.your-characters-card .row { 
		padding: 12px 0; 
		border-bottom: 1px solid ${colors.GRAY_800}; 
	}
	.recent-activity-card .row:first-child,
	.your-characters-card .row:first-child { 
		padding-top: 0 
	}
	.recent-activity-card .row:last-child,
	.your-characters-card .row:last-child { 
		border-bottom: none;
	}
	.your-characters-card .row div:first-child { 
		text-align: left;
	}
	.recent-activity-card .row button { 
		background: none; 
		border: none; 
		color: ${colors.BASE_BLUE}; 
	}
	.recent-activity-card .row button:hover { 
		text-decoration: underline; 
	}

	.random-thread-generator-card,
	.patreon-card { height: 180px;}
	.random-thread-generator-card .card-body,
	.patreon-card .card-body {  text-align: center; }
	.card a.btn {
		color: ${colors.WHITE}
	}

	.random-thread-result { 
		padding: 10px; 
		margin: 10px; 
		background: ${colors.GRAY_800}
	}
	.random-thread-result p { margin: 0; }

	.dashboard-card-center-message {
		text-align: center;
		padding: 30px;
	}

	@media (min-width: 768px) {
		// above 768px
		.at-a-glance-card > .card-body .card { 
			border-left: 1px solid ${colors.GRAY_800};
		}
		.at-a-glance-card > .card-body .card:first-child { border-left: none;}
		.at-a-glance-card > .card-body .card:last-child { border-right: none;}
		.dashboard-summary-widget-card-body .lds-css { right: 30px; }
	}
	@media (min-width: 992px) {
		// above 992px

		& .recent-activity-card,
		& .your-characters-card { height: 400px; overflow-y: auto; overflow-x: hidden;}
		.dashboard-summary-widget-card-body .lds-css { right: 90px; }
	}

	.light-theme & {
		.at-a-glance-card > .card-body .card {  
			border-color: ${colors.GRAY_100}
		}
		.recent-activity-card .row,
		.your-characters-card .row { 
		}
		.random-thread-result { 
			padding: 10px; 
			margin: 10px; 
			background: ${colors.GRAY_100}
		}
		@media (min-width: 768px) {
			// above 768px
			.at-a-glance-card > .card-body .card { 
			}
		}
	}
`;
