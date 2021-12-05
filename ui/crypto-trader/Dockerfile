FROM node:11.4.0-alpine as builder

RUN mkdir /app
WORKDIR /app


COPY ./package.json ./package-lock.json /app/crypto-trader/
RUN npm install --prefix crypto-trader


COPY . /app
RUN npm run build --prefix crypto-trader -- --output-path=./dist/out
