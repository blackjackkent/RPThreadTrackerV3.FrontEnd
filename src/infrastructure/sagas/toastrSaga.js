import React from 'react';
import { takeEvery, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import {
	FETCHED_ACTIVE_THREADS_SUCCESS,
	UNTRACK_THREAD_SUCCESS,
	UNTRACK_THREAD_FAILURE,
	UPSERT_THREAD_FAILURE,
	UPSERT_THREAD_SUCCESS,
	UPSERT_CHARACTER_FAILURE,
	UPSERT_CHARACTER_SUCCESS,
	UNTRACK_CHARACTER_SUCCESS,
	UNTRACK_CHARACTER_FAILURE,
	USER_FORGOT_PASSWORD_SUCCESS,
	USER_RESET_PASSWORD_SUCCESS,
	SUBMIT_CONTACT_FORM_SUCCESS,
	SUBMIT_CONTACT_FORM_FAILURE,
	USER_CHANGE_PASSWORD_FAILURE,
	USER_CHANGE_PASSWORD_SUCCESS,
	USER_ACCOUNT_INFO_FAILURE,
	USER_ACCOUNT_INFO_SUCCESS
} from '../actions';

function displayActiveThreadsCountMessage(action) {
	const threadData = action.data;
	if (threadData && threadData.threads && threadData.threads.length > 100) {
		toastr.light('Retrieving more than 100 threads; loading may take several minutes. Archive some threads to reduce loading time.', { status: 'info' });
	}
}

function displayUntrackThreadError() {
	toastr.error('There was a problem untracking your thread.');
}

function displayUntrackThreadSuccess() {
	toastr.success('Successfully untracked thread.');
}

function displayUpdateThreadError() {
	toastr.error('There was a problem updating your thread.');
}

function displayUpdateCharacterError() {
	toastr.error('There was a problem updating your character.');
}

function displayUpdateThreadSuccess(action) {
	const thread = action.data;
	toastr.success(`Successfully updated thread with title ${thread.userTitle}.`);
}

function displayUpdateCharacterSuccess(action) {
	const character = action.data;
	toastr.success(`Successfully updated character ${character.characterName ? character.characterName : character.urlIdentifier}`);
}

function displayUntrackCharacterSuccess() {
	toastr.success('Successfully untracked character.');
}

function displayUntrackCharacterError() {
	toastr.error('There was a problem untracking your character.');
}

function displayForgotPasswordSuccess() {
	toastr.success('Please check your email for a link to reset your password.');
}

function displayResetPasswordSuccess() {
	toastr.success('Success. You can now log in with your updated password');
}

function displaySubmitContactFormSuccess() {
	toastr.success('Thanks! Your message has been submitted and we\'ll get back to you as soon as possible.');
}

function displaySubmitContactFormError() {
	toastr.error('There was a problem submitting your message. Please try again later, or visit our support blog at http://tblrthreadtracker.tumblr.com.');
}

function displayUserChangePasswordError(action) {
	const errors = action.data;
	const messages = [];
	for (let i = 0; i < errors.length; i++) {
		messages.push(<span>{errors[i]}<br /></span>);
	}
	const message = (
		<span>
			There was a problem updating your password.<br />
			{messages}
		</span>
	);
	toastr.error('', { component: () => message });
}

function displayUserChangePasswordSuccess() {
	toastr.success('Your password was successfully updated.');
}

function displayUserAccountInfoError(action) {
	const errors = action.data;
	const messages = [];
	for (let i = 0; i < errors.length; i++) {
		messages.push(<span>{errors[i]}<br /></span>);
	}
	const message = (
		<span>
			There was a problem updating your account information.<br />
			{messages}
		</span>
	);
	toastr.error('', { component: () => message });
}

function displayUserAccountInfoSuccess() {
	toastr.success('Your account information was successfully updated.');
}

export default function* fetchActiveThreadsSaga() {
	yield all([
		takeEvery(FETCHED_ACTIVE_THREADS_SUCCESS, displayActiveThreadsCountMessage),
		takeEvery(UNTRACK_THREAD_SUCCESS, displayUntrackThreadSuccess),
		takeEvery(UNTRACK_THREAD_FAILURE, displayUntrackThreadError),
		takeEvery(UPSERT_THREAD_FAILURE, displayUpdateThreadError),
		takeEvery(UPSERT_THREAD_SUCCESS, displayUpdateThreadSuccess),
		takeEvery(UPSERT_CHARACTER_FAILURE, displayUpdateCharacterError),
		takeEvery(UPSERT_CHARACTER_SUCCESS, displayUpdateCharacterSuccess),
		takeEvery(UNTRACK_CHARACTER_FAILURE, displayUntrackCharacterError),
		takeEvery(UNTRACK_CHARACTER_SUCCESS, displayUntrackCharacterSuccess),
		takeEvery(USER_FORGOT_PASSWORD_SUCCESS, displayForgotPasswordSuccess),
		takeEvery(USER_RESET_PASSWORD_SUCCESS, displayResetPasswordSuccess),
		takeEvery(SUBMIT_CONTACT_FORM_SUCCESS, displaySubmitContactFormSuccess),
		takeEvery(SUBMIT_CONTACT_FORM_FAILURE, displaySubmitContactFormError),
		takeEvery(USER_CHANGE_PASSWORD_FAILURE, displayUserChangePasswordError),
		takeEvery(USER_CHANGE_PASSWORD_SUCCESS, displayUserChangePasswordSuccess),
		takeEvery(USER_ACCOUNT_INFO_FAILURE, displayUserAccountInfoError),
		takeEvery(USER_ACCOUNT_INFO_SUCCESS, displayUserAccountInfoSuccess)
	]);
}
