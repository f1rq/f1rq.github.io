FROM node:19 AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npm ci --omit dev

FROM node:19

WORKDIR /app

COPY --from=build /app/. .

EXPOSE 80

CMD ["node", "build"]
