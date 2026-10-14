const value = document.querySelector("#value");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");
const message = document.querySelector("#message");
const hint = document.querySelector("#hint");
const preview = document.querySelector("#preview");
const chars = document.querySelector("#chars");

let count = 0;

// TODO 1 — When + is clicked: add 1 to count, then show count in #value.
plus.addEventListener("click", function () {
  count += 1;
  value.textContent = count;
});
// TODO 2 — When − is clicked: subtract 1, but never go below 0. Show count.
minus.addEventListener("click", function () {
  if (count > 0) {
    count -= 1;
  }
  value.textContent = count;
});
// TODO 3 — When Reset is clicked: set count back to 0. Show count.
reset.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
});
// TODO 4 — On every keystroke in #message (the "input" event):
//   - copy the text into #preview
//   - show the length in #chars, for example "5 characters"
message.addEventListener("input", function () {
  preview.textContent = message.value;
  chars.textContent = `${message.value.length} characters`;
});

// TODO 5 — When #message gets the focus ("focus" event), show in #hint:
//   "Your message appears below as you type."
// When it loses the focus ("blur" event), empty #hint.
message.addEventListener("focus", function () {
  hint.textContent = "Your message appears below as you type.";
});
message.addEventListener("blur", function () {
  hint.textContent = "";
});

//**Done when** the counter goes up, down (never below 0), and back to 0; the preview and the character count follow your typing; and the hint appears only while the field has the focus.

//**Think.** Suppose you move the code of TODO 1 into a function `addOne()`, and then write `plus.addEventListener("click", addOne());` with parentheses. What happens, and why? (Lecture 5 §27)
