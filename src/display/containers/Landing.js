// #region imports
import React from 'react';
// #endregion imports

const Landing = () => {
	const currentYear = (new Date()).getFullYear();
	return (
		<div className="landing-page">
			<div className="container w-100 h-100 p-3 mx-auto">
				<div className="row">
					<div className="col-12">
						<header>
							<div>
								<nav className="nav nav-menu justify-content-right">
									<a className="nav-link" href="/login">Log In</a>
									<a className="nav-link" href="/register">Sign Up</a>
								</nav>
								<h3 className="logo">RPTHREADTRACKER</h3>
							</div>
						</header>
					</div>
				</div>
			</div>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<div className="row">
						<div className="col-8 offset-2">
							<h1 className="display-5">Never Lose RP Threads Again</h1>
							<p className="lead">
								RPThreadTracker is a free web application{' '}
								that monitors your Tumblr collaborative writing threads and lets you know{' '}
								which ones are your turn.
							</p>
						</div>
						<div className="col-12">
							<p className="buttons">
								<a href="/register" className="btn btn-primary">Sign Up Now</a>
								<button className="btn btn-primary">
									Watch Intro Video
									<span className="fas fa-play-circle" />
								</button>
							</p>
						</div>
						<div className="col-12 screenshot-image-wrapper">
							<img className="screenshot-image" src="/img/landing/screenshot.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<main role="main">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 feature-item">
							<p className="feature-icon"><span className="fas fa-check" /></p>
							<h3 className="feature-heading"> Track Your Posts</h3>
							<p className="lead">
								All you need to get started is your blog URL{' '}
								and a post ID. No connection to your Tumblr account is necessary!
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 feature-item">
							<p className="feature-icon"><span className="fas fa-users" /></p>
							<h3 className="feature-heading">Manage Multiple Characters</h3>
							<p className="lead">
								Lots of blogs? No problem! Track all your
								threads in one filterable view.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 feature-item">
							<p className="feature-icon"><span className="fas fa-share-alt" /></p>
							<h3 className="feature-heading">Share Your Status</h3>
							<p className="lead">
								Create customized public tables to let your
								partners know which threads you&apos;re working on.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<a href="/register" className="btn btn-primary bottom-cta">
								Sign Up Now
							</a>
						</div>
					</div>
				</main>

				<footer className="footer">
					<div className="inner">
						<p><a href="http://www.rpthreadtracker.com">RPThreadTracker</a> &copy; {currentYear} <a href="http://blackjack-software.com">Blackjack Software</a></p>
					</div>
				</footer>
			</div>
		</div>
	);
};
export default Landing;
