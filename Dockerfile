FROM node:18 AS BASEIMAGE

WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . .
#RUN npm run prebuild && npm run build && npm prune --production
RUN npm run build

FROM node:18

WORKDIR /src
ENV TZ=Europe/Berlin
COPY --from=BASEIMAGE /src/dist /src/dist
COPY --from=BASEIMAGE /src/node_modules /src/node_modules
EXPOSE 3000

CMD ["node", "dist/main.js"]
