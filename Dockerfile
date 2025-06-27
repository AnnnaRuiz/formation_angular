FROM node:24-bullseye-slim

WORKDIR /app/snapface

RUN npm install -g @angular/cli

RUN apt-get update && apt-get install -y git

EXPOSE 4200
