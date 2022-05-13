FROM cypress/browsers:node16.5.0-chrome97-ff96

WORKDIR /e2e

COPY package.json .
COPY package-lock.json .

COPY . .

RUN yarn install

ENTRYPOINT [ "yarn", "run" ]