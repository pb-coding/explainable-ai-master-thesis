#!/bin/bash
set -e

# Configuration
DOCKER_REGISTRY="ghcr.io"
DOCKER_USERNAME="pb-coding"
DOCKER_IMAGE_NAME="explainable-ai-master-thesis"
CONTAINER_NAME="xai-app"
TARGET_DIRECTORY="/var/www/vite-react-app"

# Authenticate with Docker registry
echo "Authenticating with Docker registry..."
echo $GITHUB_TOKEN | docker login -u $DOCKER_USERNAME --password-stdin $DOCKER_REGISTRY

# Pull the latest Docker image
echo "Pulling the latest Docker image..."
docker pull $DOCKER_REGISTRY/$DOCKER_USERNAME/$DOCKER_IMAGE_NAME:latest

# Stop and remove the existing container if it exists
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing the existing container..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Run the new Docker container
echo "Starting a new container from the latest image..."
docker run -d \
  --name $CONTAINER_NAME \
  -v $TARGET_DIRECTORY:/app \
  -p 80:80 \
  $DOCKER_REGISTRY/$DOCKER_USERNAME/$DOCKER_IMAGE_NAME:latest

echo "Deployment complete."