import React from 'react';
import { Card, CardHeader, CardBlock } from 'reactstrap';

const TrackerSupportCard = () => (
	<Card className="patreon-card">
		<CardHeader>
			<i className="fa fa-dollar" /> Support Tracker Development
		</CardHeader>
		<CardBlock className="card-body">
			<div className="form-container">
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="ng-pristine ng-valid">
					<input type="hidden" name="cmd" value="_s-xclick" autoComplete="off" />
					{
						// eslint-disable-next-line max-len
					}<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" autoComplete="off" />
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
					<img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</div>
			<a href="https://www.patreon.com/bePatron?u=4797959" className="btn btn-primary">Support me on Patreon!</a>
		</CardBlock>
	</Card>
);

export default TrackerSupportCard;
