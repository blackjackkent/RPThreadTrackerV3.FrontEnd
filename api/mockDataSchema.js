export const schema = {
	"type": "object",
	"properties": {
		"characters": {
			"type": "array",
			"minItems": 3,
			"maxItems": 5,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "number",
						"unique": true,
						"minimum": 1
					},
					"characterName": {
						"type": "string",
						"faker": "name.findName"
					},
					"urlIdentifier": {
						"type": "string",
						"faker": "lorem.word"
					},
					"isOnHiatus": {
						"type": "boolean",
					}
				},
				"required": ["id", "urlIdentifier", "isOnHiatus"]
			}
		}
	},
	"required": ["characters"]
};
