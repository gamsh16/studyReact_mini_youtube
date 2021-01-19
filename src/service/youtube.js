class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOption = {
            method: 'GET',
            redirect: 'follow'
        };

    }

    async mostPopular() {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&type=video&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(query) {
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${this.key}&q=${query}`;

        const response = await fetch(url, this.requestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;