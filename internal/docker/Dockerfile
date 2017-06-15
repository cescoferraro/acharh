FROM  mhart/alpine-node:latest
WORKDIR /srv/acharh
RUN npm i express
ADD dist/ /srv/acharh/
CMD ["node","server.js"]
