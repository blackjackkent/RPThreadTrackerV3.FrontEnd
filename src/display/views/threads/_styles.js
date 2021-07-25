import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	color: ${colors.GRAY_100};
	.thread-table-sub-component-wrapper > td {
		padding: 0;
		.thread-table-sub-component {
			padding: 10px 0;
			background: ${colors.GRAY_600};
			border-bottom: 3px solid ${colors.GRAY_400};
			.thread-table-description-display {
				padding: 5px 15px 0;
				color: ${colors.GRAY_100};
			}
			hr {
				border-top: 1px solid ${colors.GRAY_400};
				margin: 10px 0;
			}
			.tag-display-wrapper {
				padding: 5px 15px;
				display: inline-block;
				color: ${colors.GRAY_300};
			}
		}
	}
	.thread-bulk-update-controls,
	.tag-filter-select,
	.thread-refresh-button,
	.public-tool-banner {
		text-align: center;
		margin-bottom: 10px;
		background: ${colors.GRAY_900};
		padding: 10px;
	}
	.thread-bulk-update-controls .btn {
		margin-left: 10px;
	}
	.thread-refresh-button .btn {
		width: 100%;
	}
	.light-theme & {
		color: ${colors.GRAY_800};
		.thread-table-sub-component {
			background: ${colors.GRAY_200};
			border-bottom: 3px solid ${colors.GRAY_300};
			.thread-table-description-display {
				color: ${colors.GRAY_900};
			}
			.tag-display-wrapper {
				color: ${colors.GRAY_600};
			}
		}
		.thread-bulk-update-controls,
		.tag-filter-select,
		.thread-refresh-button {
			background: none;
		}
		.public-tool-banner {
			background: ${colors.GRAY_100};
		}
	}
	.tracker-table {
		.tracker-table-titles > th {
			text-align: center;
			background: ${colors.GRAY_900};
			vertical-align: top;
			&.sort-desc {
				box-shadow: inset 0 -3px 0 0 ${colors.BASE_BLUE};
			}
			&.sort-asc {
				box-shadow: inset 0 3px 0 0 ${colors.BASE_BLUE};
			}
		}
		.tracker-table-filters {
			border-left: 1px solid ${colors.GRAY_800};
			> th {
				text-align: center;
				background: ${colors.GRAY_850};
				vertical-align: top;
				border: none;
				input,
				select {
					border: 1px solid ${colors.GRAY_400};
					background: ${colors.GRAY_500};
					color: ${colors.GRAY_100};
					width: 100%;
					height: 100%;
				}
			}
		}
		.tracker-table-body tr:nth-child(odd) {
			background: ${colors.GRAY_900};
		}

		.tracker-table-body tr:nth-child(even) {
			background: ${colors.GRAY_850};
		}
	}
`;
