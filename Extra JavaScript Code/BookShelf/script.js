class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }

    addFavoriteBooks(bookName){
        if(!bookName.includes("Great")){
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks(){
        console.log(`Favorite Books: ${this.favoriteBooks.length}`);
        for(let bookName of this.   favoriteBooks){
            console.log(bookName);
        }
    }
}



function loadBooks(theBookshelf){
    fakeAjax(BOOK_API, function onBooks(bookNames){
        for(let bookName of bookNames){
            theBookshelf.addFavoriteBooks(bookName);
        }
        theBookshelf.printFavoriteBooks();
    })
}

const BOOK_API = "https://some.url/api";

let myBooks = new Bookshelf();
loadBooks(myBooks);

function fakeAjax(url, cb){
    setTimeout(function fakeLoadingDelay(){
        cb([
            "Everything Everything.",
            "The Sun is also a Star.",
            "Ego is the Enemy.",
            "Around the world in 80 days."
        ])
    }, 500)
}