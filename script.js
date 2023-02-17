function createTable(booksArray){
    const book_name_element = document.getElementById("book-name").value
    const issued_to_element = document.getElementById("issued-to").value

    const book_table_element = document.getElementById("books-table")
    console.log(book_name_element);
    console.log(issued_to_element);
    let new_book = {id:table_array.length+1, book_name: book_name_element, issued_to: issued_to_element, issued_time:new Date().toLocaleString(), status:"not returned"}
    table_array.push(new_book)
    console.log(table_array);
    let row = book_table_element.insertRow()
    let new_id = row.insertCell(0)
     new_id.innerHTML = new_book.id
    let new_book_name = row.insertCell(1)
    new_book_name.innerHTML = book_name_element
    let new_issued_to = row.insertCell(2)
    new_issued_to.innerHTML = issued_to_element
    let new_issued_time = row.insertCell(3)
    new_issued_time.innerHTML = new_book.issued_time
    let new_status = row.insertCell(4)
    new_status.innerHTML = new_book.status
}

let table_array = []
