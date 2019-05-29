import { toastr } from 'react-redux-toastr';
import { shallow } from 'enzyme';
import toastrSaga from '../toastrSaga';
import * as actions from '../../actions';
import { SagaTestWrapper } from '~/utility/helpers.unit';


jest.mock('react-redux-toastr', () => ({
	toastr: {
		light: jest.fn(),
		error: jest.fn(),
		success: jest.fn()
	}
}));

beforeEach(() => {
	jest.resetAllMocks();
});
describe('saga behavior', () => {
	describe('UNTRACK_THREAD_SUCCESS', () => {
		it('should display success message', () => {
			const action = {
				type: actions.UNTRACK_THREAD_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Successfully untracked thread.');
				});
		});
	});
	describe('UNTRACK_THREAD_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.UNTRACK_THREAD_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem untracking your thread.');
				});
		});
	});
	describe('UPSERT_THREAD_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.UPSERT_THREAD_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem updating your thread.');
				});
		});
	});
	describe('UPSERT_THREAD_SUCCESS', () => {
		it('should display success message with thread title', () => {
			const action = {
				type: actions.UPSERT_THREAD_SUCCESS,
				data: {
					userTitle: 'Test Thread'
				}
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Successfully updated thread with title Test Thread.');
				});
		});
	});
	describe('UPSERT_CHARACTER_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.UPSERT_CHARACTER_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem updating your character.');
				});
		});
	});
	describe('UPSERT_CHARACTER_SUCCESS', () => {
		it('should display success message with character name', () => {
			const action = {
				type: actions.UPSERT_CHARACTER_SUCCESS,
				data: {
					characterName: 'Test Character'
				}
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Successfully updated character Test Character');
				});
		});
		it('should display success message with character URL identifier if no name', () => {
			const action = {
				type: actions.UPSERT_CHARACTER_SUCCESS,
				data: {
					urlIdentifier: 'test-character'
				}
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Successfully updated character test-character');
				});
		});
	});
	describe('UNTRACK_CHARACTER_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.UNTRACK_CHARACTER_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem untracking your character.');
				});
		});
	});
	describe('UNTRACK_CHARACTER_SUCCESS', () => {
		it('should display success message', () => {
			const action = {
				type: actions.UNTRACK_CHARACTER_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Successfully untracked character.');
				});
		});
	});
	describe('SUBMIT_USER_FORGOT_PASSWORD_SUCCESS', () => {
		it('should display success message', () => {
			const action = {
				type: actions.SUBMIT_USER_FORGOT_PASSWORD_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Please check your email for a link to reset your password.');
				});
		});
	});
	describe('SUBMIT_USER_RESET_PASSWORD_SUCCESS', () => {
		it('should display success message', () => {
			const action = {
				type: actions.SUBMIT_USER_RESET_PASSWORD_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Success. You can now log in with your updated password');
				});
		});
	});
	describe('SUBMIT_CONTACT_FORM_SUCCESS', () => {
		it('should display success message', () => {
			const action = {
				type: actions.SUBMIT_CONTACT_FORM_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Thanks! Your message has been submitted and we\'ll get back to you as soon as possible.');
				});
		});
	});
	describe('SUBMIT_CONTACT_FORM_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.SUBMIT_CONTACT_FORM_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem submitting your message. Please try again later, or visit our support blog at http://tblrthreadtracker.tumblr.com.');
				});
		});
	});
	describe('SUBMIT_USER_CHANGE_PASSWORD_FAILURE', () => {
		it('should display error message with action data', () => {
			const action = {
				type: actions.SUBMIT_USER_CHANGE_PASSWORD_FAILURE,
				data: ['Error 1', 'Error 2']
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					const arg1 = toastr.error.mock.calls[0][0];
					const arg2 = toastr.error.mock.calls[0][1];
					const arg2Jsx = arg2.component();
					const arg2Elements = shallow(arg2Jsx);
					expect(arg1).toBe('');
					expect(arg2Elements).toMatchSnapshot();
				});
		});
	});
	describe('SUBMIT_USER_CHANGE_PASSWORD_SUCCESS', () => {
		it('should display success message', () => {
			const action = {
				type: actions.SUBMIT_USER_CHANGE_PASSWORD_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Your password was successfully updated.');
				});
		});
	});
	describe('SUBMIT_USER_ACCOUNT_INFO_FAILURE', () => {
		it('should display error message with action data', () => {
			const action = {
				type: actions.SUBMIT_USER_ACCOUNT_INFO_FAILURE,
				data: ['Error 1', 'Error 2']
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					const arg1 = toastr.error.mock.calls[0][0];
					const arg2 = toastr.error.mock.calls[0][1];
					const arg2Jsx = arg2.component();
					const arg2Elements = shallow(arg2Jsx);
					expect(arg1).toBe('');
					expect(arg2Elements).toMatchSnapshot();
				});
		});
	});
	describe('SUBMIT_USER_ACCOUNT_INFO_SUCCESS', () => {
		it('should display success message', () => {
			const action = {
				type: actions.SUBMIT_USER_ACCOUNT_INFO_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Your account information was successfully updated.');
				});
		});
	});
	describe('UPSERT_PUBLIC_VIEW_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.UPSERT_PUBLIC_VIEW_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem updating your public view.');
				});
		});
	});
	describe('UPSERT_PUBLIC_VIEW_SUCCESS', () => {
		it('should display success message with thread title', () => {
			const action = {
				type: actions.UPSERT_PUBLIC_VIEW_SUCCESS,
				data: {
					name: 'Test View'
				}
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Successfully updated public view Test View.');
				});
		});
	});
	describe('BULK_UPDATE_TAG_SUCCESS', () => {
		it('should display success message with thread title', () => {
			const action = {
				type: actions.BULK_UPDATE_TAG_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Successfully updated tag.');
				});
		});
	});
	describe('BULK_UPDATE_TAG_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.BULK_UPDATE_TAG_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem updating the tag.');
				});
		});
	});
	describe('BULK_DELETE_TAG_SUCCESS', () => {
		it('should display success message with thread title', () => {
			const action = {
				type: actions.BULK_DELETE_TAG_SUCCESS
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.success).toHaveBeenCalledTimes(1);
					expect(toastr.success).toHaveBeenLastCalledWith('Successfully deleted tag.');
				});
		});
	});
	describe('BULK_DELETE_TAG_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.BULK_DELETE_TAG_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem deleting the tag.');
				});
		});
	});
	describe('EXPORT_THREADS_FAILURE', () => {
		it('should display error message', () => {
			const action = {
				type: actions.EXPORT_THREADS_FAILURE
			};
			const saga = new SagaTestWrapper(toastrSaga);
			return saga.execute(action)
				.then(() => {
					expect(toastr.error).toHaveBeenCalledTimes(1);
					expect(toastr.error).toHaveBeenLastCalledWith('There was a problem exporting your threads.');
				});
		});
	});
});
