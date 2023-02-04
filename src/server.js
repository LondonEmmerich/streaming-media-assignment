const http = require('http');
const fs = require('fs');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getPage(request, response, index);
      break;
    case '/party.mp4':
      mediaHandler.getMedia(request, response, '/../client/party.mp4', 'video/mp4');
      break;
    case '/page2':
      htmlHandler.getPage(request, response, page2);
      break;
    case '/bling.mp3':
      mediaHandler.getMedia(request, response, '/../client/bling.mp3', 'audio/mpeg');
      break;
    case '/page3':
      htmlHandler.getPage(request, response, page3);
      break;
    case '/bird.mp4':
      mediaHandler.getMedia(request, response, '/../client/bird.mp4', 'video/mp4');
      break;
    default:
      htmlHandler.getPage(request, response, index);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on port 127.0.0.1:${port}`);
});
