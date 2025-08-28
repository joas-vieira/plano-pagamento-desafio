FROM node:22.18.0-alpine3.21 AS base

WORKDIR /usr/src/app

FROM node:22.18.0-alpine3.21 AS build

WORKDIR /usr/src/app

COPY  . .

RUN npm install --omit=dev --ignore-scripts
RUN npm run build

FROM base AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

CMD [ "npm", "run", "start:prod" ]

EXPOSE $PORT
