FROM dockerhub.azk8s.cn/library/nginx:1.17.0-alpine-perl
RUN rm /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY dist/  /usr/share/nginx/html/
