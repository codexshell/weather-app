FROM node:alpine as build
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build app/dist/* /usr/share/nginx/html/
EXPOSE 80