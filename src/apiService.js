  
export default class NewService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages(searchQuery = this.searchQuery) {
    let newData = null;
    this.searchQuery = searchQuery;
    try {
      const response = await fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=23121176-a6e266cf1dd110f625e6378e3`
      );
      newData = await response.json();
      this.incrementPage();
    } catch (error) {
      console.error(error);
    }
    return newData;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}