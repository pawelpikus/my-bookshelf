const request = async () => {
  const response = await fetch('data.json');
  if(response.status === 200){
    const data = await response.json();
    return data
  }
  else{
    console.log("error");
  }
}

function getBook(book){
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

request().then(books =>{
    document.body.innerHTML = `
    <header> 
        <h1 class="page-title">My Bookshelf</h1>
        <h2 class="info">Congratulations! <br>You've got ${books.length} books in collection now!</h2>
        <input id="search-bar" type="text" placeholder="search title or author">
    </header>
    <div class="my-bookshelf">
        ${books.map(book => getBook(book)).join('')}
    </div>`
})

