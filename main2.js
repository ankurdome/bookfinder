
function findBookCode() {
     const code = document.getElementById("code").value;
     const book = findBookByCode(code);
     const resultElement = document.getElementById("result");
     if (book) {
       resultElement.textContent = `Book Code: ${books.isd} `;
     } else {
       resultElement.textContent = "The book was not found in the library.";
     }
     return false;
   }

   const books = [
     { code: "The Great Gatsby", isd: "B001"},
     { code: "To Kill a Mockingbird", isd: "B002" },
     { code: "1984", isd: "B003" },
     { code: "Pride and Prejudice", isd: "B004" }
   ];

   function findBookByCode(code) {
     for (let i = 0; i < books.length; i++) {
       if (books[i].code === code) {
         return books[i];
       }
     }
     return null;
   }
