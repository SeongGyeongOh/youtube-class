export default class Youtube {
  constructor(key) {
    this.key = key

    this.getRequestOptions = {
      mothod: 'GET',
      redirect: 'follow',
    }
  }

  async mostPopular() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    )
    const result = await response.json()
    return result.items
    // .catch(error => console.log('error', error));
  }

  async searchVideo(query) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=25&key=${this.key}`, this.getRequestOptions)
    const result = await response.json()
    return result.items.map(item => ({ ...item, id: item.id.videoId }))
  }
}