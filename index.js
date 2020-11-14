import c from 'c4console'
import http from 'http-getters'

http.createServer(async (request, response) => {
  const {method, url, cookie, rawBody, body, path, querystring, query} = request
  if (url == '/favicon.ico') return response.end('')
  ![cookie, rawBody, body, path, querystring, query].forEach(val => val.c())

  response.end(`echo on method: ${method} at URL: ${url}`)


}).listen(3000, () => c('Server started at http://localhost:3000'))
