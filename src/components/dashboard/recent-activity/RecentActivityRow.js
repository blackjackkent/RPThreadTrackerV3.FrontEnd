import React from 'react';
import { Row, Col } from 'reactstrap';

const RecentActivityRow = () => (
	<Row>
		<Col xs="12" sm="6">
			<div><a href="http://ostwickjoker.tumblr.com">Dom and Senkata (theshadowoflavellan)</a></div>
			<div className="small ">
				Last Post by <a href="http://theshadowoflavellan.tumblr.com">theshadowoflavellan</a>
			</div>
		</Col>
		<Col sm="6" xs="12" className="text-right">
			<div>Apr 22, 2017 1:22:11 PM </div>
			<div className="small">
				<a href="/untrack">Untrack</a> &bull;
				<a href="/archive">Archive</a> &bull;
				<a href="/queue">Mark Queued</a>
			</div>
		</Col>
	</Row>
);

export default RecentActivityRow;
