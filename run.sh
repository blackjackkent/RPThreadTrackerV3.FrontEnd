#!/bin/bash
docker run -it \
	-v /$(pwd -W):/usr/src/app:cached \
	-v /usr/src/app/ \
	-p 8080:8080 \
	--rm \
	blackjacksoftware/rpthreadtrackerv3.frontend \
	yarn start:docker
