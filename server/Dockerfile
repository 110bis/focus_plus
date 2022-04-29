FROM node:16.13.0

WORKDIR /web-server
COPY . /web-server/
RUN npm install
COPY . /web-server/
EXPOSE 5000
ENV PORT=5000

# LABEL

LABEL version="1.0.0"
LABEL description="server website"
LABEL author="Quentin Treheux"

CMD [ "npm", "start" ]