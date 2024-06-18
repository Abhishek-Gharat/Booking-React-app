const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "https://m.media-amazon.com/images/I/71kL6dw5WdL._SL1241_.jpg",
        "title": "Vinyl Highway",
        "description": "Vinyl Highway goes on tour across the 1960’s with this honest, insightful and humorous chronicle of destiny and rock-and-roll, as 18-year old Mary transforms from shy college student to hit singer/songwriter, half the singing team Dick and Dee Dee, one of the most popular recording duos of the era. The duo performs with the Beach Boys, Rolling Stones, Tina Turner and many others. But with success comes growing tension between the duo",
        "genre": "Comedy/Drama",
        "rating": 4,
        "price": 70,
        "createdAt": "2024-06-07"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
        "title": "House of Sky",
        "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        "genre": "Comedy/Drama",
        "rating": 3,
        "price": 90,
        "createdAt": "2024-06-07"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
        "title": "Book Lovers",
        "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        "genre": "Action/Comedy/Crime/Drama",
        "rating": 4,
        "price": 100,
        "createdAt": "2024-05-14"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg",
        "title": "It Ends With Us ",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genre": "Comedy/Drama",
        "rating": 5,
        "price": 140,
        "createdAt": "2024-05-30"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626710416i/58446227.jpg",
        "title": "Sea of Tranquility",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        "genre": "Comedy, Drama, Thriller",
        "rating": 4,
        "price": 250,
        "createdAt": "2024-06-10"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
        "title": "Hidden Pictures",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-05-19",
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634068432i/59233594.jpg",
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://m.media-amazon.com/images/I/81WUVcGdvDL._SL1500_.jpg",
        "title": "First Lie Wins",
        "description": "This fast-paced read has everything you could want in a thriller: secret identities, a mysterious boss and a cat & mouse game that kept me guessing the whole way through.” —Reese Witherspoon",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 10,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://m.media-amazon.com/images/I/614jOJkSR+L._SL1500_.jpg",
        "title": "Using Psychology",
        "description": "An understanding .",
        "rating": 5,
        "genre": "Action/Adventure/Sci-fi",
        "price": 60,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://m.media-amazon.com/images/I/81QjFXzNjqL._SL1500_.jpg",
        "title": "Behave The bestselling",
        "description": " process the world around them.",
        "rating": 5,
        "genre": "Action/Adventure/Sci-fi",
        "price": 60,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    // Additional book data from Amazon
   
];

function getAllBooks() {
    return data;
}

export { getAllBooks };