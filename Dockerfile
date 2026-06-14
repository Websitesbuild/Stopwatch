FROM public.ecr.aws/docker/library/nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY . .
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
