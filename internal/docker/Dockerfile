FROM  mhart/alpine-node:latest
WORKDIR /srv/achars
RUN npm i express
ADD dist/ /srv/achars/
CMD ["node","server.js"]
