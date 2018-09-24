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
				<h3>Why am I seeing a &quot;Not Found&quot; error for my post?</h3>

				<p>The following are several potential causes/fixes for this issue:</p>
				<ul>
					<li>
						Make sure you have not mistyped your blog name or post ID, and that{' '}
						you are using a post ID from a post on the tracked blog.
					</li>
					<li>
						If you have recently changed your blog URL on Tumblr, you will have{' '}
						to update it in the tracker as well, via the “Manage Blogs” screen, before{' '}
						the tracker can find your threads again.
					</li>
					<li>
						If you have made your blog private only to Tumblr users (i.e. the switch{' '}
						in your blog settings that says &quot;Allow logged-out users to see this blog&quot;{' '}
						is turned off), your blog will also be private to the API which the tracker{' '}
						uses, and thus your posts cannot be retrieved by the tracker unless you make{' '}
						your blog public again.
					</li>
					<li>
						If you see many/all threads displaying this issue at once, it’s likely a Tumblr{' '}
						bug and will pass shortly; feel free to let me know what’s happening by sending me{' '}
						an ask, so I can post an announcement if I haven’t already.
					</li>
				</ul>
				<h3>Why doesn&apos;t the <a href="/tools">Export Threads</a> tool include post dates and whose turn it is?</h3>
				<p>
					The export tool is intended as a way to download a full list of your threads during a period when{' '}
					the Tracker isn&apos;t performing its usual function for some reason (i.e. during a Tumblr outage),{' '}
					so it&apos;s intended to be a pretty lightweight process. Adding calls to Tumblr would make{' '}
					export process more resource intensive and take a lot longer, and assuming the tracker&apos;s{' '}
					connection with Tumblr is stable, you can get the same information from the usual thread{' '}
					tables.
				</p>
			</CardBlock>
		</Card>
	</TabPane>
);

export default FAQPane;
