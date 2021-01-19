class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOption = {
            method: 'GET',
            redirect: 'follow'
        };

    }

    mostPopular() {
      return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&type=video&key=${this.key}`, this.requestOptions)
      .then(response => response.json())
      .then(result => result.items);
    }

    search(query) {
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${this.key}&q=${query}`;

        return fetch(url, this.requestOptions)
        .then(response => response.json())
        .then(result => result.items.map(item => ({...item, id: item.id.videoId})));
    }
}

export default Youtube;