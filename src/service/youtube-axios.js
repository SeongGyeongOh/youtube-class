import axios from "axios";

export default class YoutubeAxios {
  constructor(httpClient) {
    this.youtube = httpClient 
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25
      }
    })
    return response.data.items
  }

  async searchVideo(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
        q: query
      }
    })
    return response.data.items
  }
}