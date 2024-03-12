class Vaction {
    constructor(id, countryId, name, averagePrice, foundedYear, rating, imageUrl, desc) {
      this.id = id;
      this.countryId = countryId;
      this.name = name;
      this.averagePrice = averagePrice;
      this.foundedYear = foundedYear;
      this.rating = rating;
      this.imageUrl = imageUrl;
      this.desc = desc;
    }
  
    toString() {
      return `${this.name} was founded in ${this.foundedYear} - Average Price: ${this.averagePrice}, Rating: ${this.rating}`;
    }
  }
  
  export default Vaction;