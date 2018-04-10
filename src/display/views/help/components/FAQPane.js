import React from 'react';
import {
	TabPane, Card, CardHeader, CardBlock
} from 'reactstrap';

const FAQPane = () => (
	<TabPane tabId="faq">
		<Card>
			<CardHeader>
				<i
					className="fas fa-question-circle"
				/> FAQ
			</CardHeader>
			<CardBlock className="card-body">
				<p>
					Coming soon!
				</p>
			</CardBlock>
		</Card>
	</TabPane>
);

export default FAQPane;
