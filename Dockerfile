FROM node:9.6.1
WORKDIR /build


RUN npm install react-scripts@1.1.1 -g --silent
RUN npm install react-app
RUN npm install react-calendar
RUN npm install axios
CMD ["npm", "start"]
