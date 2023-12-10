FROM node:18

WORKDIR /app

COPY . . 

RUN npm i 
RUN yarn build


CMD ["yarn","preview","--port","4173","--host"]