FROM node:16.14-alpine

WORKDIR /app-backend

COPY package* ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]