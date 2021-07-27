import { useState } from 'react';
import { toast } from 'react-toastify';
import { useUntrackThreadMutation } from '../mutations';

const useUntrackThreadModal = () => {
	const [isUntrackThreadModalOpen, setIsUntrackThreadModalOpen] = useState(false);
	const { untrackThread, isLoading } = useUntrackThreadMutation();
	const openUntrackThreadModal = () => {
		setIsUntrackThreadModalOpen(true);
	};
	const submitUntrackThread = (actedThread) => {
		untrackThread(actedThread)
			.then(() => {
				setIsUntrackThreadModalOpen(false);
				toast.success('Thread untracked!');
			})
			.catch(() => {
				toast.error(`There was an error untracking this thread.`);
			});
	};
	return {
		isUntrackThreadModalOpen,
		setIsUntrackThreadModalOpen,
		isUntrackThreadLoading: isLoading,
		submitUntrackThread
	};
};
export default useUntrackThreadModal;
