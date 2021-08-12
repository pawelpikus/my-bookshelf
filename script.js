const getBooks = async () => {
  const response = await fetch('data.json');
  if (response.status === 200) {
    const data = await response.json();
    return data
  } else {
    console.log("error");
  }
}

function getBook(book) {
  return `    
    <div class="my-book">
        <div class="cover">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.author}</p>
        </div>
        <div class="spine"></div>
        <div class="footer"></div>
    </div>`
}

function displayAllBooks(books) {
  return books.map(book => getBook(book)).join('')
}

function renderPage(books) {
  document.body.innerHTML = `
    <header> 
        <h1 class="page-title">My Bookshelf</h1>
        <h2 class="info"><span class="highlight">${books.length}</span> books in collection</h2>
        <input id="search-bar" type="text" placeholder="search title or author">
    </header>
    <div class="my-bookshelf">
        ${displayAllBooks(books)}
    </div>`
}

function searchBooks(){
  const inputEl = document.getElementById("search-bar");
  inputEl.addEventListener("keyup", () => {
    let input = inputEl.value.toLowerCase();
    const booksEl = document.getElementsByClassName("my-book");
    const bookTitles = document.getElementsByClassName("book-title");
    const bookAuthors = document.getElementsByClassName("book-author");

    for (let i = 0; i < booksEl.length; i += 1) {
      (bookTitles[i].textContent.toLowerCase().includes(input) ||
        bookAuthors[i].textContent.toLowerCase().includes(input)) ?
      booksEl[i].style.display = "": booksEl[i].style.display = "none";
    }
  })
}

getBooks().then(books => {
  renderPage(books);
  searchBooks();
})