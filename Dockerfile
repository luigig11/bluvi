FROM node:lts-alpine

WORKDIR /app

COPY package.json ./

ENV PORT=8000

RUN npm install

COPY . .

RUN npm run build

USER node

CMD ["npm", "run", "start"]

EXPOSE 8000