Exercise 1: **Think.** `cleanEmail` returns a new string. After `const e = " A@B.org "; cleanEmail(e);`, what is the value of `e`? Why?

1. After running the line `const e = " A@B.org "; cleanEmail(e);`, the new value of `e` is "a@b.org". This is because the function trim() erases the extra spaces around the main words in a string and the function toLowerCase() returns the lower case form of alphabetical letter.

Exercise 2: **Think.** In TODO 1, what goes wrong if you test `grade >= 10` **first**? Try it with `letter(17)`.

2. If I test `grade >= 10` first, this if condition will be compiled and tested vefore the others. Since 10 is the lowest grade among the conditions, the code will always return `D` as long as the grade is greater than or equal to 10. If I run `letter(17)`, the result will be `D`.

Exercise 3: **Think.** Why does `withPrice` need the spread syntax? What would happen to `products[0]` if you wrote `product.price = newPrice; return product;`?

3. `withPrice` needs the dot syntax because it helps maintain immutability. By using the spread operator, `withPrice` creates a copy of the original object and overrides the `price` property with a new value, all wile leaving the original object completely untouched.
   If I wrote `product.price= newPrice; return product;`, products[0] would change because it points to the same object in memory, so calling a function that modifies `product.price` would alter the original `Mango` ogbject inside the `products` array.

Exercise 4: **Think.** In TODO 1, try `"title"` without the `#`. The `<h1>` does not change, but look at the browser tab. Which element did `querySelector` find, and why?

4. Indeed, after removing the "#" from `"#title"`, the `<h1>` element did not change. This is because the `querySelector`found the html `title` element. When a dot "." is used in a `querySelector`, it uses the classname to find the element, and when used with a "#", it uses the id. When neither the "." or "#" are used, the `querySelector` refers directly to the html element itselft, which is why it found the html `title` element.

Exercise 5:**Think.** Add a sixth meal to the `meals` array, without touching the HTML. What changes on the page, and why is building the page from data useful?

5. After adding a 6th meal in the `meals` array, that new meal is added to the list of meals displayed in the browser page. Building a page from data is useful because it reduces the amount of changes necessary to change the details in a page. It makes updating information quicker and easier, without having to allways interact or modify with the code.

Exercise 6:**Think.** Suppose you move the code of TODO 1 into a function `addOne()`, and then write `plus.addEventListener("click", addOne());` with parentheses. What happens, and why? (Lecture 5 §27)

6. If I move the code of TODO 1 into a function, and then call that function on an eventListener with parantheses, the function will run automatically when the page loads. Clicking the button will have no effect.

Exercise 7:**Think.** Comment out TODO 1 and submit a name. What happens to the page and to your list? Why?

7. Once an input is given or written and the submit button is pressed, the page automatically submits the input and reloads the page without updating the list. The input is not stored nor is the list updated, information is automatically submited and the page reloads. This is the page's default behavior.
