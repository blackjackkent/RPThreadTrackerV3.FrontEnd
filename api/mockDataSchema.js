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
		},
		"news": {
			"type": "array",
			"minItems": 5,
			"maxItems": 5,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "number",
						"unique": true,
						"minimum": 1
					},
					"userTitle": {
						"type": "string",
						"faker": "lorem.sentence"
					},
					"lastPostDate": {
						"type": "Date",
						"faker": "date.recent"
					},
					"lastPostUrl": {
						"type": "string",
						"faker": "internet.url"
					},
					"isNew": {
						"type": "boolean"
					}
				},
				"required": ["id", "userTitle", "lastPostDate", "lastPostUrl", "isNew"]
			}
		}
	},
	"required": ["characters", "news"],
};
