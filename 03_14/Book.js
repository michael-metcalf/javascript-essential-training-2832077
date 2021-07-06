class Book {
  constructor(
    title,
    author,
    binding,
    pageCount,
    read,
    recommend
  ) {
    this.title = title,
    this.author = author,
    this.binding = binding,
    this.pageCount = pageCount,
    this.read = read
    this.recommend = recommend
  }
  toggleReadStatus(newReadStatus) {
    this.read = newReadStatus
  }
  toggleRecommendStatus(newRecommendStatus) {
    this.recommend = newRecommendStatus
  }
  halfPageCount() {
    return console.log("Half of", this.title, "is", this.pageCount / 2, "pages." )
  }
}

export default Book;