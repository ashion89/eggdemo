FROM node:10

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD ./ /app
RUN npm install

EXPOSE 7001
CMD [ "npm run dev" ]
