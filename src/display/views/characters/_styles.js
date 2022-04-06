import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	.table-wrapper {
		overflow-x: auto;
	}
	.pagination-controls {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		align-items: center;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 5px;
		box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
		border-top: 2px solid rgba(0, 0, 0, 0.1);
		color: ${colors.GRAY_100};
		margin: 10px;
		input,
		select {
			border: 1px solid rgba(0, 0, 0, 0.1);
			background: #fff;
			padding: 5px 7px;
			font-size: inherit;
			border-radius: 3px;
			font-weight: normal;
			outline-width: 0;
			height: 70%;
		}
		button {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			width: 100px;
			border: 0;
			border-radius: 3px;
			padding: 6px;
			font-size: 1em;
			color: ${colors.WHITE};
			background: ${colors.BASE_BLUE};
			transition: all 0.1s ease;
			cursor: pointer;
			outline-width: 0;
		}
		button[disabled] {
			opacity: 0.5;
			cursor: default;
		}
		button:not([disabled]):hover {
			background: rgba(0, 0, 0, 0.3);
			color: #fff;
		}
		.pagination-data {
			line-height: 30px;
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

		.tracker-table-body tr td {
			padding: 7px 5px;
		}

		.text-muted {
			color: #c66 !important;
			font-style: italic;
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
		.pagination-controls {
			color: ${colors.GRAY_800};
			box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
		}
		.tracker-table {
			color: ${colors.GRAY_800};
			.tracker-table-titles > th {
				background: ${colors.GRAY_200};
				color: ${colors.GRAY_800};
				border: 1px solid ${colors.GRAY_300};
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
		}
	}
`;
