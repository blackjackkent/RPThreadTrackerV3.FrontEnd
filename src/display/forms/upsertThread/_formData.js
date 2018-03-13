import React from 'react';

export default {
	partnerUrlIdentifier: {
		helpMessage: [
			'For a Tumblr account, this will be the part of your URL before ',
			'".tumblr.com". For instance, if your URL is ',
			<strong>http://myawesomeblog.tumblr.com</strong>,
			' you would enter ',
			<strong>myawesomeblog</strong>,
			' in this field.'
		],
		tooltip: (
			<div>
				Make sure you spell this correctly. The tracker will use this value to filter{' '}
				out irrelevant replies to the thread; if it is misspelled, or your partner changes{' '}
				their identifier, the tracker will not identify their replies as relevant. (You can{' '}
				also leave this blank to be notified of all replies.)
			</div>
		)
	},
	postId: {
		helpMessage: [
			'This must be a post from your blog. The post ID is the ',
			'part of the URL after ".tumblr.com/post/". For instance, ',
			'if the post is at the URL ',
			<strong>http://myawesomeblog.tumblr.com/post/12345</strong>,
			', you would enter ',
			<strong>12345</strong>,
			' in this field.'
		]
	},
	userTitle: {
		helpMessage: 'This can be anything you like!'
	}
};
