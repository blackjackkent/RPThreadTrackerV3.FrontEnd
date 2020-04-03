export default {
	MY_TURN: (s) => s.isCallingCharactersTurn && !s.isQueued,
	THEIR_TURN: (s) => !s.isCallingCharactersTurn && !s.isQueued,
	QUEUED: (s) => s.isQueued,
	ALL: (s) => s
};
