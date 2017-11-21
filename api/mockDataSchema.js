export const schema = {
	"type": "object",
	"properties": {
		"characters": {
			"type": "array",
			"minItems": 5,
			"maxItems": 5,
			"uniqueItems": true,
			"items": {
				"$ref": "#/definitions/character"
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
					"character": {
						"$ref": "#/definitions/character"
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
				"required": ["id", "isMyTurn", "isArchived", "lastPostDate", "lastPostUrl", "userTitle", "lastPosterUrlIdentifier", "character"]
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
	"definitions": {
		"character": {
			"enum": [{
				"id": 1,
				"characterName": "Dominic Trevelyan",
				"urlIdentifier": "ostwickjoker",
				"homeUrl": "http://ostwickjoker.tumblr.com",
				"isOnHiatus": false,
				"platform": {
					"platformId": 1,
					"platformName": "Tumblr"
				}
			}, {
				"id": 2,
				"characterName": "Elliot Hawke",
				"urlIdentifier": "somniari-hawke",
				"homeUrl": "http://somniari-hawke.tumblr.com",
				"isOnHiatus": true,
				"platform": {
					"platformId": 1,
					"platformName": "Tumblr"
				}
			}, {
				"id": 3,
				"characterName": "Jenna Shepard",
				"urlIdentifier": "cmdr-blackjack-shepard",
				"homeUrl": "http://cmdr-blackjack-shepard.tumblr.com",
				"isOnHiatus": false,
				"platform": {
					"platformId": 1,
					"platformName": "Tumblr"
				}
			}, {
				"id": 4,
				"characterName": "Philip Shepard",
				"urlIdentifier": "n7-tech-geek",
				"homeUrl": "http://n7-tech-geek.tumblr.com",
				"isOnHiatus": true,
				"platform": {
					"platformId": 1,
					"platformName": "Tumblr"
				}
			}, {
				"id": 5,
				"urlIdentifier": "truest-friend-noblest-foe",
				"homeUrl": "http://truest-friend-noblest-foe.tumblr.com",
				"isOnHiatus": false,
				"platform": {
					"platformId": 1,
					"platformName": "Tumblr"
				}
			}]
		}
	}
};
