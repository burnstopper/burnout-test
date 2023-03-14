FROM node:18-alpine AS builder
WORKDIR /app
COPY ./frontend/package.json ./
RUN yarn install
COPY ./frontend .
ARG BURNOUT_HOST_NAME
ENV REACT_APP_HOST_NAME=
RUN yarn build

FROM nginx:1.23-alpine-slim
COPY --from=builder /app/build /usr/share/nginx/burnout
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/*.conf.template /etc/nginx/templates/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
