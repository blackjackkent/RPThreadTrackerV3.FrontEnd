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
						"type": "integer",
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
					"homeUrl": {
						"type": "string",
						"faker": "internet.url"
					},
					"isOnHiatus": {
						"type": "boolean",
					}
				},
				"required": ["id", "urlIdentifier", "isOnHiatus", "homeUrl"]
			}
		},
		"activeThreads": {
			"type": "array",
			"minItems": 30,
			"maxItems": 150,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "integer",
						"unique": true,
						"minimum": 1
					},
					"characterId": {
						"type": "integer",
						"minimum": 1,
						"maximum": 10
					},
					"isMyTurn": {
						"type": "boolean",
					},
					"isArchived": {
						"enum": [false]
					},
					"markedQueued": {
						"type": "Date",
						"faker": "date.recent"
					},
					"lastPostDate": {
						"type": "Date",
						"faker": "date.past"
					},
					"lastPostUrl": {
						"type": "string",
						"faker": "internet.url"
					},
					"userTitle": {
						"type": "string",
						"faker": "lorem.sentence"
					},
					"lastPosterUrlIdentifier": {
						"type": "string",
						"faker": "lorem.word"
					},
					"trackedUserUrlIdentifier": {
						"type": "string",
						"faker": "lorem.word"
					},
					"tags": {
						"type": "array",
						"minItems": 0,
						"maxItems": 5,
						"items": {
							"type": "string",
							"faker": "lorem.sentence"
						}
					}
				},
				"required": ["id", "isMyTurn", "isArchived", "lastPostDate", "lastPostUrl", "userTitle", "lastPosterUrlIdentifier", "characterId"]
			}
		},
		"archivedThreads": {
			"type": "array",
			"minItems": 30,
			"maxItems": 150,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "integer",
						"unique": true,
						"minimum": 1
					},
					"characterId": {
						"type": "integer",
						"minimum": 1,
						"maximum": 10
					},
					"isMyTurn": {
						"type": "boolean",
					},
					"isArchived": {
						"enum": [true]
					},
					"markedQueued": {
						"enum": [null]
					},
					"lastPostDate": {
						"type": "Date",
						"faker": "date.past"
					},
					"lastPostUrl": {
						"type": "string",
						"faker": "internet.url"
					},
					"userTitle": {
						"type": "string",
						"faker": "lorem.sentence"
					},
					"lastPosterUrlIdentifier": {
						"type": "string",
						"faker": "lorem.word"
					},
					"trackedUserUrlIdentifier": {
						"type": "string",
						"faker": "lorem.word"
					},
					"tags": {
						"type": "array",
						"minItems": 0,
						"maxItems": 5,
						"items": {
							"type": "string",
							"faker": "lorem.sentence"
						}
					}
				},
				"required": ["id", "isMyTurn", "isArchived", "lastPostDate", "lastPostUrl", "userTitle", "lastPosterUrlIdentifier", "characterId"]
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
						"type": "integer",
						"unique": true,
						"minimum": 1
					},
					"userTitle": {
						"type": "string",
						"faker": "lorem.sentence"
					},
					"lastPostDate": {
						"type": "Date",
						"faker": "date.past"
					},
					"lastPostUrl": {
						"type": "string",
						"faker": "internet.url"
					},
					"isUnread": {
						"type": "boolean"
					}
				},
				"required": ["id", "userTitle", "lastPostDate", "lastPostUrl", "isUnread"]
			}
		}
	},
	"required": ["characters", "news", "activeThreads", "archivedThreads"],
};
