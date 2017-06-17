FROM  mhart/alpine-node:latest
WORKDIR /srv/acharh
RUN npm i express
RUN npm i compression 
ADD dist/ /srv/acharh/
CMD ["node","server.js"]
