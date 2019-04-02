# base image
FROM node:9.6.1

# set working directory
WORKDIR /home/jenkins/.jenkins/workspace/'Trainer Manager-FrontEnd'/

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
RUN npm install react-app
RUN npm install react-calendar
RUN npm install axios
CMD ["npm", "start"]
