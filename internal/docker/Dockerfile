FROM  node:6
WORKDIR /srv/achars
RUN npm i express
ADD dist/ /srv/achars/dist/
ADD production.js /srv/achars/
CMD ["node","production.js"]
