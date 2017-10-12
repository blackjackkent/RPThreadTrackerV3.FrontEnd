import React from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock, Table, Label, Input, Form, FormGroup
} from 'reactstrap';

const Threads = () => (
	<div className="animated fadeIn">
		<Row>
			<Col>
				<Card className="thread-filter-card">
					<CardHeader>
						Filter Threads
						<Label className="switch switch-sm switch-text switch-info float-right mb-0">
							<Input type="checkbox" className="switch-input" />
							<span className="switch-label" data-on="On" data-off="Off" />
							<span className="switch-handle" />
						</Label>
					</CardHeader>
					<CardBlock className="card-body">
						<Form>
							<FormGroup className="row">
								<Label className="col-form-label col-md-1" htmlFor="orderBy">Order By</Label>
								<Input type="select" name="ccmonth" id="ccmonth" className="col-md-2">
									<option value="UserTitle">Thread Title</option>
									<option value="LastPostDate">Last Post Date</option>
									<option value="LastPoster">LastPoster</option>
									<option value="WatchedShortname">Partner URL</option>
								</Input>
								<Input type="select" name="ccmonth" id="ccmonth" className="col-md-2">
									<option value="asc">Ascending</option>
									<option value="desc">Descending</option>
								</Input>
							</FormGroup>
						</Form>
					</CardBlock>
				</Card>
			</Col>
		</Row>
		<Row>
			<Col>
				<Card className="thread-table-card">
					<CardBlock className="card-body">
						<Table>
							<thead>
								<tr>
									<th><Input type="checkbox" /></th>
									<th>Thread Title</th>
									<th>Last Poster</th>
									<th>Last Post Date</th>
									<th>Watched Shortname</th>
									<th>Tags</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><Input type="checkbox" /></td>
									<td><a href="http://somniari-hawke.tumblr.com">Elliot and Kat</a></td>
									<td><a href="http://somniari-hawke.tumblr.com">somniari-hawke</a>	</td>
									<td>Jun 28, 2016 6:37:44 PM	</td>
									<td />
									<td />
									<td><span className="fa fa-cog" /></td>
								</tr>
								<tr>
									<td><Input type="checkbox" /></td>
									<td><a href="http://somniari-hawke.tumblr.com">Elliot and Kat</a></td>
									<td><a href="http://somniari-hawke.tumblr.com">somniari-hawke</a>	</td>
									<td>Jun 28, 2016 6:37:44 PM	</td>
									<td />
									<td />
									<td><span className="fa fa-cog" /></td>
								</tr>
								<tr>
									<td><Input type="checkbox" /></td>
									<td><a href="http://somniari-hawke.tumblr.com">Elliot and Kat</a></td>
									<td><a href="http://somniari-hawke.tumblr.com">somniari-hawke</a>	</td>
									<td>Jun 28, 2016 6:37:44 PM	</td>
									<td />
									<td />
									<td><span className="fa fa-cog" /></td>
								</tr>
								<tr>
									<td><Input type="checkbox" /></td>
									<td><a href="http://somniari-hawke.tumblr.com">Elliot and Kat</a></td>
									<td><a href="http://somniari-hawke.tumblr.com">somniari-hawke</a>	</td>
									<td>Jun 28, 2016 6:37:44 PM	</td>
									<td />
									<td />
									<td><span className="fa fa-cog" /></td>
								</tr>
							</tbody>
						</Table>
					</CardBlock>
				</Card>
			</Col>
		</Row>
	</div>
);

export default Threads;
