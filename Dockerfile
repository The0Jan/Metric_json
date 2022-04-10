FROM node:9-slim
WORKDIR /softax
COPY package.json /softax
RUN npm install
COPY . /softax
CMD ["npm", "start"]