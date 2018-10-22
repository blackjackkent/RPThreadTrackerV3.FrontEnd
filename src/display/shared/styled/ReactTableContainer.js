import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

// #region dark theme
const darkTheme = `
	.rt-thead.-filters {
		background: ${colors.GRAY_850};
	}
	.rt-thead.-filters input,
	.rt-thead.-filters select {
		border: 1px solid ${colors.GRAY_400};
		background: ${colors.GRAY_500};
		color: ${colors.GRAY_100};
	}
	.rt-thead.-filters .rt-th {
		border: none;
	}
	.rt-thead.-header,
	.rt-tfoot {
		box-shadow: 0 2px 15px 0 ${colors.GRAY_500};
	}
	.rt-thead.-header .rt-th,
	.rt-thead .rt-td {
		border: 1px solid ${colors.GRAY_800};
		background: ${colors.GRAY_900};
		border-left: 1px solid ${colors.GRAY_800};
		padding: 10px;
		font-weight: bold;
	}
	.rt-thead .rt-th:last-child,
	.rt-thead .rt-td:last-child {
		border-right: 1px solid ${colors.GRAY_800};
	}
	.rt-thead .rt-th.-sort-asc,
	.rt-thead .rt-td.-sort-asc {
		box-shadow: inset 0 3px 0 0 ${colors.BASE_BLUE};
	}

	.rt-thead .rt-th.-sort-desc,
	.rt-thead .rt-td.-sort-desc {
		box-shadow: inset 0 -3px 0 0 ${colors.BASE_BLUE};
	}

	.rt-tbody .rt-tr-group {
		border-bottom: solid 1px ${colors.GRAY_800};
	}

	.rt-tbody .rt-td {
		border-right: 1px solid ${colors.GRAY_800};
	}

	.rt-tbody .rt-td .text-muted {
		color: #f77 !important;
	}

	.rt-tbody .rt-td a {
		color: ${colors.LIGHT_BLUE};
	}

	.-pagination {
		border: none;
	}

	.pagination-top {
		margin-bottom: 20px;
	}

	.pagination-bottom {
		margin-top: 20px;
	}

	.-pagination .-btn {
		color: ${colors.WHITE};
		background: ${colors.DARK_BLUE};
	}

	.rt-table {
		border: 1px solid ${colors.GRAY_700}
	}

	.rt-noData {
		display: block;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background: rgba(255, 255, 255, 0.8);
		transition: all .3s ease;
		z-index: 1;
		pointer-events: none;
		padding: 20px;
		color: rgba(0, 0, 0, 0.5)
	}

	.-loading {
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.8);
		transition: all .3s ease;
		z-index: -1;
		opacity: 0;
		pointer-events: none;
	}

	.-loading>div {
		position: absolute;
		display: block;
		text-align: center;
		width: 100%;
		top: 50%;
		left: 0;
		font-size: 15px;
		color: rgba(0, 0, 0, 0.6);
		-webkit-transform: translateY(-52%);
		transform: translateY(-52%);
		transition: all .3s cubic-bezier(.25, .46, .45, .94)
	}

	&.-striped .rt-tr.-odd {
		background: ${colors.GRAY_900}
	}

	&.-striped .rt-tr.-even {
		background: ${colors.GRAY_850};
	}

	.current-characters-table & {
		color: ${colors.GRAY_100};
	}
`;
// #endregion dark theme
// #region light theme
const lightTheme = `
	.light-theme & {
		border: none;
		.rt-thead.-filters {
			background: ${colors.GRAY_100};
		}
		.rt-thead.-filters input,
		.rt-thead.-filters select {
			border: 1px solid ${colors.GRAY_200};
			background: ${colors.GRAY_050};
			color: ${colors.GRAY_800};
		}
		.rt-thead.-header,
		.rt-tfoot {
			box-shadow: 0 2px 15px 0 ${colors.GRAY_500};
		}
		.rt-thead.-header .rt-th,
		.rt-thead .rt-td {
			border: 1px solid ${colors.GRAY_250};
			background: ${colors.GRAY_200};
			border-left: 1px solid ${colors.GRAY_250};
		}
		.rt-thead .rt-th:last-child,
		.rt-thead .rt-td:last-child {
			border-right: 1px solid ${colors.GRAY_100};
		}
		.rt-thead .rt-th.-sort-asc,
		.rt-thead .rt-td.-sort-asc {
			box-shadow: inset 0 3px 0 0 ${colors.BASE_BLUE};
		}

		.rt-thead .rt-th.-sort-desc,
		.rt-thead .rt-td.-sort-desc {
			box-shadow: inset 0 -3px 0 0 ${colors.BASE_BLUE};
		}

		.rt-tbody .rt-tr-group {
			border-bottom: solid 1px ${colors.GRAY_200};
		}

		.rt-tbody .rt-td {
			border-right: 1px solid ${colors.GRAY_200};
		}

		.rt-tbody .rt-td a {
			color: ${colors.DARK_BLUE};
		}

		.-pagination .-btn {
			color: ${colors.WHITE};
			background: ${colors.DARK_BLUE};
		}

		.rt-table {
			border: none;
			border-left: 1px solid ${colors.GRAY_200}
		}

		&.-striped .rt-tr.-odd {
			background: ${colors.GRAY_050}
		}

		&.-striped .rt-tr.-even {
			background: ${colors.GRAY_100};
		}
	}

	.light-theme .current-characters-table & {
		color: ${colors.GRAY_800};
	}
`;
// #endregion light theme
export default styled.div`
	.ReactTable {
		${darkTheme}
		${lightTheme}
	}
`;
