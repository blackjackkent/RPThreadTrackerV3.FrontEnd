import React from 'react';
import { takeEvery, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import {
	UNTRACK_THREAD_SUCCESS,
	UNTRACK_THREAD_FAILURE,
	UPSERT_THREAD_FAILURE,
	UPSERT_THREAD_SUCCESS,
	UPSERT_CHARACTER_FAILURE,
	UPSERT_CHARACTER_SUCCESS,
	UNTRACK_CHARACTER_SUCCESS,
	UNTRACK_CHARACTER_FAILURE,
	SUBMIT_USER_FORGOT_PASSWORD_SUCCESS,
	SUBMIT_USER_RESET_PASSWORD_SUCCESS,
	SUBMIT_USER_CHANGE_PASSWORD_FAILURE,
	SUBMIT_USER_CHANGE_PASSWORD_SUCCESS,
	SUBMIT_USER_ACCOUNT_INFO_FAILURE,
	SUBMIT_USER_ACCOUNT_INFO_SUCCESS,
	UPSERT_PUBLIC_VIEW_FAILURE,
	UPSERT_PUBLIC_VIEW_SUCCESS,
	EXPORT_THREADS_FAILURE,
	BULK_UPDATE_TAG_SUCCESS,
	BULK_UPDATE_TAG_FAILURE,
	BULK_DELETE_TAG_SUCCESS,
	BULK_DELETE_TAG_FAILURE
} from '../actions';

function* displayUntrackThreadError() {
	toastr.error('There was a problem untracking your thread.');
}

function* displayUntrackThreadSuccess() {
	toastr.success('Successfully untracked thread.');
}

function* displayUpdateThreadError() {
	toastr.error('There was a problem updating your thread.');
}

function* displayUpdateCharacterError() {
	toastr.error('There was a problem updating your character.');
}

function* displayUpdateThreadSuccess(action) {
	const thread = action.data;
	toastr.success(`Successfully updated thread with title ${thread.userTitle}.`);
}

function* displayUpdateCharacterSuccess(action) {
	const character = action.data;
	toastr.success(
		`Successfully updated character ${
			character.characterName ? character.characterName : character.urlIdentifier
		}`
	);
}

function* displayUntrackCharacterSuccess() {
	toastr.success('Successfully untracked character.');
}

function* displayUntrackCharacterError() {
	toastr.error('There was a problem untracking your character.');
}

function* displayForgotPasswordSuccess() {
	toastr.success('Please check your email for a link to reset your password.');
}

function* displayResetPasswordSuccess() {
	toastr.success('Success. You can now log in with your updated password');
}

function* displayUserChangePasswordError(action) {
	const errors = action.data;
	const messages = [];
	for (let i = 0; i < errors.length; i++) {
		messages.push(
			<span key={errors[i]}>
				{errors[i]}
				<br />
			</span>
		);
	}
	const message = (
		<span>
			There was a problem updating your password.
			<br />
			{messages}
		</span>
	);
	toastr.error('', {
		component: () => message
	});
}

function* displayUserChangePasswordSuccess() {
	toastr.success('Your password was successfully updated.');
}

function* displayUserAccountInfoError(action) {
	const errors = action.data;
	const messages = [];
	for (let i = 0; i < errors.length; i++) {
		messages.push(
			<span key={errors[i]}>
				{errors[i]}
				<br />
			</span>
		);
	}
	const message = (
		<span>
			There was a problem updating your account information.
			<br />
			{messages}
		</span>
	);
	toastr.error('', {
		component: () => message
	});
}

function* displayUserAccountInfoSuccess() {
	toastr.success('Your account information was successfully updated.');
}

function* displayUpdatePublicViewError() {
	toastr.error('There was a problem updating your public view.');
}

function* displayUpdatePublicViewSuccess(action) {
	const view = action.data;
	toastr.success(`Successfully updated public view ${view.name}.`);
}

function* displayExportThreadsError() {
	toastr.error('There was a problem exporting your threads.');
}

function* displayBulkUpdateTagSuccess() {
	toastr.success('Successfully updated tag.');
}

function* displayBulkUpdateTagFailure() {
	toastr.error('There was a problem updating the tag.');
}

function* displayBulkDeleteTagSuccess() {
	toastr.success('Successfully deleted tag.');
}

function* displayBulkDeleteTagFailure() {
	toastr.error('There was a problem deleting the tag.');
}

export default function* fetchActiveThreadsSaga() {
	yield all([
		takeEvery(BULK_UPDATE_TAG_SUCCESS, displayBulkUpdateTagSuccess),
		takeEvery(BULK_UPDATE_TAG_FAILURE, displayBulkUpdateTagFailure),
		takeEvery(BULK_DELETE_TAG_SUCCESS, displayBulkDeleteTagSuccess),
		takeEvery(BULK_DELETE_TAG_FAILURE, displayBulkDeleteTagFailure),
		takeEvery(UNTRACK_THREAD_SUCCESS, displayUntrackThreadSuccess),
		takeEvery(UNTRACK_THREAD_FAILURE, displayUntrackThreadError),
		takeEvery(UPSERT_THREAD_FAILURE, displayUpdateThreadError),
		takeEvery(UPSERT_THREAD_SUCCESS, displayUpdateThreadSuccess),
		takeEvery(UPSERT_CHARACTER_FAILURE, displayUpdateCharacterError),
		takeEvery(UPSERT_CHARACTER_SUCCESS, displayUpdateCharacterSuccess),
		takeEvery(UNTRACK_CHARACTER_FAILURE, displayUntrackCharacterError),
		takeEvery(UNTRACK_CHARACTER_SUCCESS, displayUntrackCharacterSuccess),
		takeEvery(SUBMIT_USER_FORGOT_PASSWORD_SUCCESS, displayForgotPasswordSuccess),
		takeEvery(SUBMIT_USER_RESET_PASSWORD_SUCCESS, displayResetPasswordSuccess),
		takeEvery(SUBMIT_USER_CHANGE_PASSWORD_FAILURE, displayUserChangePasswordError),
		takeEvery(SUBMIT_USER_CHANGE_PASSWORD_SUCCESS, displayUserChangePasswordSuccess),
		takeEvery(SUBMIT_USER_ACCOUNT_INFO_FAILURE, displayUserAccountInfoError),
		takeEvery(SUBMIT_USER_ACCOUNT_INFO_SUCCESS, displayUserAccountInfoSuccess),
		takeEvery(UPSERT_PUBLIC_VIEW_FAILURE, displayUpdatePublicViewError),
		takeEvery(UPSERT_PUBLIC_VIEW_SUCCESS, displayUpdatePublicViewSuccess),
		takeEvery(EXPORT_THREADS_FAILURE, displayExportThreadsError)
	]);
}
