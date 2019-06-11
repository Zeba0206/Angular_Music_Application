# FROM node:9-alpine
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app
# ADD dist/angular-music-application/index.html  /usr/src/app/dist/angular-music-application
# RUN npm install
# RUN npm install http-server -g
# CMD ["http-server", "-p", "4200"]

FROM node:12.2.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0