import React, { Component } from 'react';
import {
	Row, Col, CardGroup, TabContent, TabPane, Nav, NavItem, NavLink,
	Table, Badge
} from "reactstrap";
import classnames from "classnames";
import DashboardSummaryWidget from '../../components/DashboardSummaryWidget/DashboardSummaryWidget';

class Dashboard extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	render() {
		return (
			<div className="animated fadeIn">
				<CardGroup>
					<DashboardSummaryWidget icon="icon-pencil" color="info" header="35">My Turn</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-check" color="success" header="15">Their Turn</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-list" color="warning" header="53">All Threads</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-drawer" color="primary" header="135">Archived</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-calendar" color="danger" header="3">Queued</DashboardSummaryWidget>
				</CardGroup>
				<Row>
					<Col>
						<Nav tabs>
							<NavItem>
								<NavLink
									className={classnames({ active: this.state.activeTab === '1' })}
									onClick={() => { this.toggle('1'); }}
								>
									Home
                				</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames({ active: this.state.activeTab === '2' })}
									onClick={() => { this.toggle('2'); }}
								>
									Profile
                				</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames({ active: this.state.activeTab === '3' })}
									onClick={() => { this.toggle('3'); }}
								>
									Messages
                				</NavLink>
							</NavItem>
						</Nav>
						<TabContent activeTab={this.state.activeTab}>
							<TabPane tabId="1">
								<Table responsive>
									<thead>
										<tr>
											<th>Username</th>
											<th>Date registered</th>
											<th>Role</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Samppa Nori</td>
											<td>2012/01/01</td>
											<td>Member</td>
											<td>
												<Badge color="success">Active</Badge>
											</td>
										</tr>
										<tr>
											<td>Estavan Lykos</td>
											<td>2012/02/01</td>
											<td>Staff</td>
											<td>
												<Badge color="danger">Banned</Badge>
											</td>
										</tr>
										<tr>
											<td>Chetan Mohamed</td>
											<td>2012/02/01</td>
											<td>Admin</td>
											<td>
												<Badge color="secondary">Inactive</Badge>
											</td>
										</tr>
										<tr>
											<td>Derick Maximinus</td>
											<td>2012/03/01</td>
											<td>Member</td>
											<td>
												<Badge color="warning">Pending</Badge>
											</td>
										</tr>
										<tr>
											<td>Friderik Dávid</td>
											<td>2012/01/21</td>
											<td>Staff</td>
											<td>
												<Badge color="success">Active</Badge>
											</td>
										</tr>
									</tbody>
								</Table>
							</TabPane>
							<TabPane tabId="2">
								2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum.
							</TabPane>
							<TabPane tabId="3">
								2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum.
							</TabPane>
						</TabContent>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Dashboard;
