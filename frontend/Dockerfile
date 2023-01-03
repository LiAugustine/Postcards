FROM node:19

WORKDIR /profiles

COPY package.json ./
RUN npm install

COPY . .

CMD npm run build && npm start