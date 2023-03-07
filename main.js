
function findBook() {
     const code = document.getElementById("code").value;
     const book = findBookByCode(code);
     const resultElement = document.getElementById("result");
     if (book) {
       resultElement.textContent = `${book.title} by ${book.author} is at ${book.shelf} in ${book.row} and ${book.Column}.`;
     } else {
       resultElement.textContent = "The book was not found in the library.";
     }
     return false;
   }

   const books = [
     { code: "The C++ Programming Language", title: "The C++ Programming Language", author: "Bjarne Stroustrup", shelf: "2nd Shelf", row: "4th Row", Column: "30th Column"},
     { code: "The Practice of Programming", title: "The Practice of Programming", author: "Brian W. Kernighan & Rob Pike",shelf: "3rd Shelf", row: "3th Row", Column: "10th Column" },
     { code: "Close to the Machine", title: "Close to the Machine", author: "Ellen Ullman", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "The Art of Computer Programming", title: "The Art of Computer Programming", author: "Donald Knuth", shelf: "1st Shelf", row: "4th Row", Column: "18th Column" },
     { code: "Fundamentals of Computer Algorithms", title: "Fundamentals of Computer Algorithms", author: "Ellis Horowitz", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "The Art of Unix Programming", title: "The Art of Unix Programming", author: "Eric Raymond", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "The Psychology of Computer Programming", title: "The Psychology of Computer Programming", author: "Gerald M. Weinberg", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "The Java Programming Language", title: "The Java Programming Language", author: "James Gosling", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "The Best Software Writing", title: "The Best Software Writing", author: "Joel Spolsky", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "After the Software Wars", title: "After the Software Wars", author: "Keith Curtis", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "Free Software, Free Society", title: "Free Software, Free Society", author: "Richard M. Stallman", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "Patterns of Software", title: "Patterns of Software", author: "Richard P. Gabriel", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "Innovation Happens Elsewhere", title: "Innovation Happens Elsewhere", author: "Richard P. Gabriel", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "Introduction to Computer Science Using Python", title: "Introduction to Computer Science Using Python", author: " Charles Dierbach", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "JavaScript: The Good Parts", title: "JavaScript: The Good Parts", author: "Douglas Crockford", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "The Pragmatic Programmer", title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "Structure and Interpretation of Computer Programs", title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson and Gerald Sussman", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "Modern Operating Systems", title: "Modern Operating Systems", author: "Andrew S. Tanenbaum", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "Introduction to Algorithms", title: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson and Ron Rivest", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" }
   ];

   function findBookByCode(code) {
     for (let i = 0; i < books.length; i++) {
       if (books[i].code === code) {
         return books[i];
       }
     }
     return null;
   }




   //////////////////bubblyButtons/////////////////////////////////
   var animateButton = function(e) {

 e.preventDefault;
 //reset animation
 e.target.classList.remove('animate');

 e.target.classList.add('animate');
 setTimeout(function(){
   e.target.classList.remove('animate');
 },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
 bubblyButtons[i].addEventListener('click', animateButton, false);
}
