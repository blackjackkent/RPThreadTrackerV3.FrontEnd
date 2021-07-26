import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	.thread-bulk-update-controls,
	.tag-filter-select,
	.thread-refresh-button,
	.public-tool-banner {
		text-align: center;
		margin-bottom: 10px;
		background: ${colors.GRAY_900};
		padding: 10px;
		color: ${colors.GRAY_100};
	}
	.thread-bulk-update-controls .btn {
		margin-left: 10px;
	}
	.thread-refresh-button .btn {
		width: 100%;
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

		.icon-column {
			text-align: center;
			width: 15px;
			margin: auto;
			cursor: pointer;
		}

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
	}

	.light-theme & {
		.tracker-table {
			color: ${colors.GRAY_800};
			.tracker-table-titles > th {
				background: ${colors.GRAY_200};
				color: ${colors.GRAY_800};
				border: 1px solid ${colors.GRAY_300};
			}
			.tracker-table-filters {
				border-left: 1px solid ${colors.GRAY_300};
				border-right: 1px solid ${colors.GRAY_300};
				> th {
					background: ${colors.GRAY_100};
				}
			}

			.tracker-table-body td {
				border-color: ${colors.GRAY_250};
				a {
					color: ${colors.DARK_BLUE};
				}
			}

			.tracker-table-body tr:nth-child(odd) {
				background: ${colors.GRAY_050};
			}

			.tracker-table-body tr:nth-child(even) {
				background: ${colors.GRAY_100};
			}

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
		}
		.thread-bulk-update-controls,
		.tag-filter-select,
		.thread-refresh-button {
			background: none;
		}
		.public-tool-banner {
			background: ${colors.GRAY_100};
			color: ${colors.GRAY_800};
		}
	}
`;
