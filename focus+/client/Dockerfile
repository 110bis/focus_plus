FROM node:16.13.0

WORKDIR /web-client
COPY . /web-client/
RUN npm install
COPY . /web-client/
EXPOSE 3000
ENV PORT=3000

# LABEL

LABEL version="1.0.0"
LABEL description="client website"
LABEL author="Quentin Treheux"

CMD [ "npm", "start" ]