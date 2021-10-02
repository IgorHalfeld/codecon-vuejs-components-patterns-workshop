export default (httpClient) => ({
  getAll () {
    return httpClient.get('/posts')
  }
})
