const transformSortDirectionData = (val) => {
	return val === 'true';
};

const transformCharacterSelectData = (val) => {
	if (!val) {
		return val;
	}
	return val.map((d) => parseInt(d, 10));
};

const transformFormData = (data) => {
	const transformedData = { ...data };
	transformedData.sortDescending = transformSortDirectionData(data.sortDescending);
	transformedData.characterIds = transformCharacterSelectData(data.characterIds);
	return transformedData;
};

export default transformFormData;
