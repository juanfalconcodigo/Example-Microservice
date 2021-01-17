FROM node:14.15.3-alpine

ARG baseDir="msexpress"

WORKDIR ${baseDir}/ .

COPY ${baseDir}/package*.json ./

RUN npm install

COPY ${baseDir}/ ./

CMD ["npm","start"]


