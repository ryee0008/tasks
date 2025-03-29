FROM node:20

WORKDIR /app

COPY . .

RUN npm install

ENV NODE_ENV=production

EXPOSE 7001

CMD ["npm", "run", "dev"]
