FROM node:10

# Create app directory
WORKDIR /eggdemo

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD ./ /eggdemo
RUN npm install

EXPOSE 7001
CMD ["npm", "start" ]
