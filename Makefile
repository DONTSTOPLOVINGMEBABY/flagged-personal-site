IMAGE_NAME := website-code
CONTAINER_NAME := website-code

all: clean build run

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run --name $(CONTAINER_NAME) -p 80:80 $(IMAGE_NAME)

clean:
	docker ps -aq | xargs docker stop | xargs docker rm
	docker images -q $(CONTAINER_NAME) | xargs docker rmi