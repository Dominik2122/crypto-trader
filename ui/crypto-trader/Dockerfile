FROM node:16 AS builder

RUN mkdir /app /app/crypto-trader
WORKDIR /app/crypto-trader


COPY ./package.json ./package-lock.json ./
RUN npm install


COPY . .
RUN npm run build --prod


FROM nginx:alpine
WORKDIR ../

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/crypto-trader/dist/crypto-trader /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

