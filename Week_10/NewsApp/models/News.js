class News {
    constructor(
        id,
        type,
        headline,
        date,
        author,
        agency,
        description,
        imageUrl
    ) {
        this.id = id;
        this.type = type;
        this.headline = headline,
        this.date = date,
        this.author = author,
        this.agency = agency,
        this.description = description,
        this.imageUrl = imageUrl
    }

    toString(){
        return `${this.headline} was written by ${this.author} on ${this.date} and published by ${this.agency}. ${this.description}\n Catergory:${this.type}\nImage:${this.imageUrl}`
    }


} 



export default News