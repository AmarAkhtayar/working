FROM node:14.14.0-alpine AS builder

COPY package.json package-lock.json ./

RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder

RUN npm run build -- --output-path=./dist --prod 


### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY nginx.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy htpasswd over to nginx site
# COPY .htpasswd /usr/share/nginx/html/

##copy sitemap and robots over
# COPY robots.txt /usr/share/nginx/html/
# COPY sitemap /usr/share/nginx/html/sitemap/
# COPY sitemap.xml /usr/share/nginx/html/

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
