FROM node:18-alpine as dev

WORKDIR /app

COPY . .

CMD [ "yarn", "dev" ]