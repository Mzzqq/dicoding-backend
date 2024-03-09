const http = require('http')

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListemer = (request, response) => {
    response.setHeader('Content-Type', 'text/html')

    response.statusCode = 200
    response.end('<h1>This is ht</h1>')
}

const server = http.createServer(requestListemer)