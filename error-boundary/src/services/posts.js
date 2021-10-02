import global from '../global'

function getPosts (httpClient) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(async () => {
        const response = await httpClient.get('/posts')
        resolve(response)
      }, 3000)
    } catch (err) {
      reject(err)
    }
  })
}

export default (httpClient) => ({
  async getAll () {
    global.loading.show()
    const response = await getPosts(httpClient)
    global.loading.hide()
    return response
  }
})
