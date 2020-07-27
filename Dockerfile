# 可以修改env来实现修改反向代理的地址,需要修改site.template中的环境变量和对应配置
FROM registry.cn-hangzhou.aliyuncs.com/hthj_base/nginx:1.17.0-alpine-perl
COPY site.template /etc/nginx/conf.d/
CMD envsubst '${API_URL}' < /etc/nginx/conf.d/site.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
COPY dist/  /usr/share/nginx/html/