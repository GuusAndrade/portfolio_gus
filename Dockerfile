
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install crypto --save

EXPOSE 4173

CMD ["npm", "run", "start"]