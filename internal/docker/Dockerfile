FROM  mhart/alpine-node:latest
WORKDIR /srv/acharh
RUN npm i express@5.0.0-alpha.5
RUN npm i compression 
ADD dist/ /srv/acharh/
CMD ["node","server.js"]
