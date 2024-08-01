FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN npm install -g serve
CMD ["serve", "-s", "."]
EXPOSE 3001

