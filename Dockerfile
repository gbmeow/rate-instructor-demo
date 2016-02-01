FROM node:onbuild

RUN echo "Building container"

## run npm install
COPY ./package.json ./usr/src/app
RUN npm install

CMD ["npm", "start"]
