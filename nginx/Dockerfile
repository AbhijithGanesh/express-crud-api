FROM nginx:latest
LABEL AUTHOR Abhijith Ganesh

COPY nginx.conf /etc/nginx/nginx.conf
RUN ["nginx", "-g" , "start"]
EXPOSE 8000