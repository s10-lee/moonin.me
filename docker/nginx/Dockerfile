FROM nginx:latest

COPY ./docker/nginx/advanced.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/dhparam-2048.pem /etc/ssl/certs/dhparam-2048.pem

COPY ./docker/nginx/localhost.crt /etc/letsencrypt/common/localhost.crt
COPY ./docker/nginx/localhost.key /etc/letsencrypt/common/localhost.key
