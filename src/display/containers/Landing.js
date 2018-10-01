// #region imports
import React from 'react';
import { Link } from 'react-router-dom';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';
// #endregion imports

const Landing = () => {
	const currentYear = (new Date()).getFullYear();
	return (
		<div className="landing-page">
			<nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
				<div className="container">
					<a className="navbar-brand logo text-uppercase" href="index.html">RPThreadTracker</a>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav navbar-center" id="mySidenav">
							<li className="nav-item active">
								<a href="#home" className="nav-link">Home</a>
							</li>
							<li className="nav-item">
								<a href="#features" className="nav-link">Features</a>
							</li>
							<li className="nav-item">
								<a href="#features" className="nav-link">Features</a>
							</li>
							<li className="nav-item">
								<a href="#contact" className="nav-link">Contact</a>
							</li>

						</ul>
					</div>
					<div className="nav-button ml-auto">
						<ul className="nav navbar-nav navbar-right">
							<li className="nav-item">
								<Link className="nav-link" href="/login" to="/login">Login</Link>
							</li>
							<li>
								<Link href="/register" to="/register" type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Sign Up</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<section className="home-padding-t-120 position-relative" id="home" data-parallax="scroll" data-image-src="images/img-2.jpg">
				<div className="bg-overlay" />
				<div className="display-table">
					<div className="home-cell-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 offset-lg-2 text-white text-center">
									<h1 className="home-title">Never lose track of your roleplay threads again!</h1>
									<p className="padding-t-15 home-desc">RPThreadTracker is a free web application that monitors your Tumblr collaborative writing threads and lets you know which ones are your turn.</p>
									<p className="jumbotron-buttons">
										<Link href="/register" to="/register" className="btn btn-custom margin-t-20">Get Started</Link>
										<button type="button" className="btn btn-primary margin-t-20">
											Watch Intro Video
											<span className="fas fa-play-circle" />
										</button>
									</p>
									<img src="img/landing/desktop.png" alt="" className="img-fluid center-block margin-t-20" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section" id="features">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<h1 className="section-title text-center">Features</h1>
							<div className="section-title-border margin-t-20" />
						</div>
					</div>
					<div className="row margin-t-30">
						<div className="col-lg-4 margin-t-20">
							<div className="features-box text-center">
								<i className="pe-7s-diamond text-custom" />
								<h4 className="padding-t-15">Track Your Posts</h4>
								<p className="padding-t-15 text-muted">
									Add a post ID for one post in the thread, and the app will keep track of whose{' '}
									turn it is.
								</p>
							</div>
						</div>
						<div className="col-lg-4 margin-t-20">
							<div className="features-box text-center">
								<i className="pe-7s-display2 text-custom" />
								<h4 className="padding-t-15">Clean Layout</h4>
								<p className="padding-t-15 text-muted">You&apos;ll get a consolidated, filterable table view of all threads across all characters. Never worry about messy activity feeds again!</p>
							</div>
						</div>
						<div className="col-lg-4 margin-t-20">
							<div className="features-box text-center">
								<i className="pe-7s-piggy text-custom" />
								<h4 className="padding-t-15">No Login Necessary</h4>
								<p className="padding-t-15 text-muted">RPThreadTracker requires no connection to your social media accounts -- just a post ID for each thread.</p>
							</div>
						</div>
					</div>
					<div className="row margin-t-30">
						<div className="col-lg-4 margin-t-20">
							<div className="features-box text-center">
								<i className="pe-7s-science text-custom" />
								<h4 className="padding-t-15">Manage Multiple Characters</h4>
								<p className="padding-t-15 text-muted">
									Lots of blogs? No problem! Track all your threads in one place or filter{' '}
									the list by character.
								</p>
							</div>
						</div>
						<div className="col-lg-4 margin-t-20">
							<div className="features-box text-center">
								<i className="pe-7s-news-paper text-custom" />
								<h4 className="padding-t-15">Share Your Status</h4>
								<p className="padding-t-15 text-muted">
									Create customized public tables to let your partners know which threads{' '}
									you&apos;re working on.
								</p>
							</div>
						</div>
						<div className="col-lg-4 margin-t-20">
							<div className="features-box text-center">
								<i className="pe-7s-plane text-custom" />
								<h4 className="padding-t-15">Add Threads Easily From Your Browser</h4>
								<p className="padding-t-15 text-muted">
									With the RPThreadTracker Quick-Add browser extension, you can track new threads{' '}
									rapidly and without hassle directly from Tumblr.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section section-lg" data-parallax="scroll">
				<div className="bg-overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="text-white">Free Your Mind For Your Writing</h2>
							<p className="padding-t-15 home-desc">Lorem ipsum dolor sit amet, consectetur adipisicing eli.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
							<Link
								href="/register"
								to="/register"
								className="btn btn-custom margin-t-30 waves-effect waves-light"
							>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="section" id="features">
				<div className="container">
					<div className="row vertical-content">
						<div className="col-lg-5">
							<div className="features-box">
								<h2 className="">We are digital creative agency</h2>
								<p className="text-muted web-desc">Lorem ipsum dolor sit amet, consectetur adipisicing eli.Lorem ipsum dolor sit amet, consectetur adipisicing eli.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
								<ul className="text-muted list-unstyled margin-t-30 features-item-list">
									<li className="">We put a lot of effort in design.</li>
									<li className="">The most important ingredient of successful website.</li>
									<li className="">Sed ut perspiciatis unde omnis iste natus error sit.</li>
									<li className="">Submit Your Orgnization.</li>
								</ul>
								<a href="/" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right" /></a>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="features-img features-right text-right">
								<img src="img/landing/devices.png" alt="devices" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section bg-gray">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<h1 className="section-title text-center">Work Process</h1>
							<div className="section-title-border margin-t-20" />
							<p className="section-subtitle text-muted text-center font-secondary padding-t-30">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.class at a euismod mus luctus quam.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 text-center process-left-icon-1">
							<i className="pe-7s-angle-right" />
						</div>
						<div className="col-lg-6 text-center process-left-icon-2">
							<i className="pe-7s-angle-right" />
						</div>
					</div>
					<div className="row margin-t-50">
						<div className="col-lg-4 plan-line">
							<div className="text-center process-box">
								<i className="pe-7s-pen text-custom" />
								<h4 className="padding-t-15">Tell us what you need</h4>
								<p className="text-muted">Lorem ipsum dolor Lorem ipsum sit amet.</p>
							</div>
						</div>
						<div className="col-lg-4 plan-line">
							<div className="text-center process-box">
								<i className="pe-7s-id text-custom" />
								<h4 className="padding-t-15">Get free quotes</h4>
								<p className="text-muted">Lorem ipsum dolor Lorem ipsum sit amet.</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text-center process-box">
								<i className="pe-7s-target text-custom" />
								<h4 className="padding-t-15">Deliver high quality product</h4>
								<p className="text-muted">Lorem ipsum dolor Lorem ipsum sit amet.</p>
							</div>
						</div>
						<div className="text-center mx-auto">
							<a href="/" className="btn btn-custom waves-light waves-effect margin-t-50">Get Started <i className="mdi mdi-arrow-right" /></a>
						</div>
					</div>
				</div>
			</section>
			<section className="section" id="testi">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<h1 className="section-title text-center">People says</h1>
							<div className="section-title-border margin-t-20" />
							<p className="section-subtitle text-muted text-center font-secondary padding-t-30">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.class at a euismod mus luctus quam.</p>
						</div>
					</div>
					<div className="row margin-t-50">
						<div className="col-lg-4">
							<div className="testimonial-box margin-t-30">
								<img src="images/testimonials/user-1.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
								<div className="bg-gray testimonial-decs">
									<h5 className="text-muted text-center"><b>&quot;</b>I have been using this template for all my company needs for the last 3 years and couldn&apos;t be happier with their service and expertise.</h5>
								</div>
								<h5 className="text-center text-uppercase padding-t-15">Ruben Reed -<span className="text-muted text-capitalize">Charleston</span></h5>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="testimonial-box margin-t-30">
								<img src="images/testimonials/user-3.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
								<div className="bg-gray testimonial-decs">
									<h5 className="text-muted text-center"><b>&quot;</b>I have been using this template for all my company needs for the last 3 years and couldn&apos;t be happier with their service and expertise.</h5>
								</div>
								<h5 className="text-center text-uppercase padding-t-15">Michael P. Howlett -<span className="text-muted text-capitalize">Worcester</span></h5>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="testimonial-box margin-t-30">
								<img src="images/testimonials/user-2.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
								<div className="bg-gray testimonial-decs">
									<h5 className="text-muted text-center"><b>&quot;</b>I have been using this template for all my company needs for the last 3 years and couldn&apos;t be happier with their service and expertise.</h5>
								</div>
								<h5 className="text-center text-uppercase padding-t-15">Theresa D. Sinclair -<span className="text-muted text-capitalize">Lynchburg</span></h5>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section section-lg" data-parallax="scroll" data-image-src="images/img-2.jpg">
				<div className="bg-overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<h1 className="get-started-title text-white">Let&apos;s Get Started</h1>

							<p className="section-subtitle font-secondary text-white text-center padding-t-30">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.class at a euismod mus luctus quam.</p>
							<a href="/" className="btn btn-bg-white waves-effect margin-t-20">Get Started <i className="mdi mdi-arrow-right" /></a>
						</div>
					</div>
				</div>
			</section>
			<section className="section " id="contact">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-lg-12">
							<i className="ti-headphone-alt title-icon text-muted" />
							<h3 className="title">Get In Touch</h3>
							<p className="text-muted mt-3 title-subtitle mx-auto">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="mt-4 pt-4">
								<p className="text-muted mt-4"><span className="font-weight-bold ">Office Address:</span><br /> <span className="d-block mt-2">4461 Cedar Street Moro, AR 72368</span></p>
								<p className="text-muted mt-4"><span className="font-weight-bold ">Office Time:</span><br /> <span className="d-block mt-2">9:00AM To 6:00PM</span></p>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="custom-form mt-4 pt-4">
								<div id="message" />
								<form method="post" action="php/contact.php" name="contact-form" id="contact-form">
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group mt-2">
												<input name="name" id="name" type="text" className="form-control" placeholder="Your name*" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group mt-2">
												<input name="email" id="email" type="email" className="form-control" placeholder="Your email*" />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group mt-2">
												<input type="text" className="form-control" id="subject" placeholder="Your Subject.." />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group mt-2">
												<textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your message..." />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 text-right">
											<input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
											<div id="simple-msg" />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="cta bg-dark">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<ul className="list-inline social margin-t-20">
								<li className="list-inline-item"><a href="/" className="social-icon"><i className="mdi mdi-facebook" /></a></li>
								<li className="list-inline-item"><a href="/" className="social-icon"><i className="mdi mdi-twitter" /></a></li>
								<li className="list-inline-item"><a href="/" className="social-icon"><i className="mdi mdi-linkedin" /></a></li>
								<li className="list-inline-item"><a href="/" className="social-icon"><i className="mdi mdi-google-plus" /></a></li>
								<li className="list-inline-item"><a href="/" className="social-icon"><i className="mdi mdi-dribbble" /></a></li>
							</ul>
						</div>
						<div className="col-lg-3 text-white margin-t-30">
							<p className="margin-b-0 contact-title"><i className="pe-7s-call" /> &nbsp;+91 123 4556 789</p>
						</div>
						<div className="col-lg-3 text-white margin-t-30 text-right">
							<p className="contact-title"><i className="pe-7s-mail-open" />&nbsp; Support@info.com</p>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 margin-t-20">
							<h5>REXZA</h5>
							<div className="text-muted margin-t-20">
								<ul className="list-unstyled footer-list">
									<li><a href="/">Home</a></li>
									<li><a href="/">About us</a></li>
									<li><a href="/">Careers</a></li>
									<li><a href="/">Contact us</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 margin-t-20">
							<h5>Information</h5>
							<div className="text-muted margin-t-20">
								<ul className="list-unstyled footer-list">
									<li><a href="/">Terms &amp; Condition</a></li>
									<li><a href="/">About us</a></li>
									<li><a href="/">Jobs</a></li>
									<li><a href="/">Bookmarks</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 margin-t-20">
							<h5>Support</h5>
							<div className="text-muted margin-t-20">
								<ul className="list-unstyled footer-list">
									<li><a href="/">FAQ</a></li>
									<li><a href="/">Contact</a></li>
									<li><a href="/">Disscusion</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 margin-t-20">
							<h5>Subscribe</h5>
							<div className="text-muted margin-t-20">
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean ligula{' '}
									eget dolor.
								</p>
							</div>
							<form className="form subscribe">
								<input placeholder="Email" className="form-control" required />
								<a href="/" className="submit"><i className="pe-7s-paper-plane" /></a>
							</form>
						</div>
					</div>
				</div>
			</footer>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="footer-alt-border" />
						<div className="footer-alt">
							<div className="float-left pull-none ">
								<a href="http://www.rpthreadtracker.com">RPThreadTracker</a> &copy; {currentYear} <a href="http://blackjack-software.com">Blackjack Software</a>
							</div>
							<div className="float-right pull-none ">
								<img src="images/payment.png" alt="payment-img" height="36" />
							</div>
							<div className="clearfix" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default withPageViewTracker(Landing);
