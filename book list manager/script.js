let books = [];


function displayBook(){
   let bookList = document.getElementById('bookList');
   bookList.innerHTML = '';
   books.forEach((book, index)=>{
    let bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    bookItem.innerHTML = ` <strong>Title: ${book.title}</strong>
    <strong>Author: ${book.author}</strong>
    <button onclick="removeBook(${index})">Remove</button>`
    bookList.appendChild(bookItem); 
})
   
}

function addBook(){
    let titleInput = document.getElementById("titleInput").value;
    let authorInput = document.getElementById('authorInput').value;

    if(titleInput && authorInput){
        const newBook = {
            title:titleInput,
            author:authorInput
        }
        books.push(newBook);
        // console.log(books);
        displayBook();
    }
    document.getElementById("titleInput").value = '';
    document.getElementById("authorInput").value = '';
}


function removeBook(index){
    books.splice(index,1);
    displayBook();
}
displayBook();