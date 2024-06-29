FROM --platform=$BUILDPLATFORM node:20.12.0-alpine3.19 AS base
ENV DIR /app
WORKDIR $DIR

# Development Mode
FROM base AS development
EXPOSE 4200
COPY package.json package.json
RUN npm install -g @angular/cli
RUN yarn install
CMD [ "yarn", "start:dev" ]
