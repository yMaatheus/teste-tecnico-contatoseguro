FROM node:18-alpine

WORKDIR /app-frontend

COPY package* ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "preview" ]