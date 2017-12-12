import React from 'react';
import { TabPane, Table, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import TagManagementRow from './TagManagementRow';

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
const ManageThreadsPane = (props) => {
	const { tags } = props;
	return (
		<TabPane tabId="manage-tags" className="manage-tags">
			<p>
				Here you can edit or delete tags that you
				have used to identify and group your tracked threads.
			</p>
			<Row>
				<Col xl={{ size: 8, offset: 2 }}>
					<Table>
						<tbody>
							{
								tags.length ? tags.map(item => <TagManagementRow tag={item} key={item.id} />) : ''
							}
						</tbody>
					</Table>
				</Col>
			</Row>
		</TabPane>
	);
};
ManageThreadsPane.propTypes = propTypes;
export default ManageThreadsPane;
