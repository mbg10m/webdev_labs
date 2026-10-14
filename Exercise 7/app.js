const form = document.querySelector("#guestForm");
const input = document.querySelector("#guest");
const error = document.querySelector("#error");
const guests = document.querySelector("#guests");

form.addEventListener("submit", (event) => {
  // TODO 1 — Stop the page from reloading.
  event.preventDefault();
  // TODO 2 — Read the name from the input and remove the spaces around it.
  const name = input.value.trim();
  // TODO 3 — If the name is empty: show "Please enter a name." in #error and stop (return).
  if (name === "") {
    error.textContent = "Please enter a name.";
    return;
  }
  // TODO 4 — Otherwise:
  //   - empty #error
  //   - create an <li> with the name (textContent) and append it to #guests
  //   - empty the input
  error.textContent = "";

  const li = document.createElement("li");
  li.textContent = name;

  guests.append(li);

  input.value = "";
});

// BONUS 5 — Clicking a guest toggles the class "arrived" on it.
// Use ONE listener on #guests and event.target.closest("li").
guests.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (li && guests.contains(li)) {
    li.classList.toggle("arrived");
  }
});
//**Done when** names are added with the button **and** with the Enter key, the page never reloads, an empty name (or only spaces) shows the error, and the error disappears after a valid name.

//**Think.** Comment out TODO 1 and submit a name. What happens to the page and to your list? Why?
