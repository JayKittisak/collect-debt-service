FROM node:14

WORKDIR /rodray_server
COPY package.json .
RUN npm install
COPY . .
CMD npm start