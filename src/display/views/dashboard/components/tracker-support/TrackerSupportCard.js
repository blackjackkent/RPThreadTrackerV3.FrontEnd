import React from 'react';
import { CardHeader, CardBlock } from 'reactstrap';
import Card from '../../../../shared/styled/Card';

const TrackerSupportCard = () => (
	<Card className="patreon-card">
		<CardHeader>
			<i className="fas fa-dollar-sign" /> Support Tracker Development
		</CardHeader>
		<CardBlock className="card-body">
			<div className="form-container">
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
					<input type="hidden" name="cmd" value="_s-xclick" />
					{
						// eslint-disable-next-line max-len
					}<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</div>
			{/* <div className="patreon-button-wrapper">
				<a href="https://www.patreon.com/bePatron?u=4797959" className="btn btn-primary">Support me on Patreon!</a>
			</div> */}
		</CardBlock>
	</Card>
);

export default TrackerSupportCard;
