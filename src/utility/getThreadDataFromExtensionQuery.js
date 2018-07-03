import getQuery from './getQuery';

const getThreadDataFromExtensionQuery = (characters) => {
	const query = getQuery();
	const thread = {
		postId: query.tumblrPostId
	};
	if (!characters.length) {
		return thread;
	}
	const character = characters.find(c => c.urlIdentifier === query.tumblrBlogShortname);
	if (!character) {
		thread.characterId = characters[0].characterId;
	} else {
		thread.characterId = character.characterId;
	}
	return thread;
};
export default getThreadDataFromExtensionQuery;
