/* =====================================================
   DOM REVISION FILE
   Sequence: Basics -> Selectors -> Content -> Style/Attribute
             -> classList -> Create/Remove -> Events
             -> Event Delegation -> Traversal -> Forms
             -> Final Practice (Todo List)
===================================================== */


/* ================================
   1. DOM BASICS
   document = poore HTML tree ka object
================================ */
console.log("Poora DOM tree:", document);


/* ================================
   2. SELECTORS
   Elements ko pakadna (select karna)
================================ */
const title = document.getElementById("title");        // ID se pakdo
const firstPara = document.querySelector(".para");     // CSS selector, PEHLA match
const allParas = document.querySelectorAll(".para");   // CSS selector, SAARE match

console.log("Title element:", title);
console.log("Pehla .para:", firstPara);
console.log("Saare .para:", allParas);


/* ================================
   3. CONTENT BADALNA
   textContent -> sirf plain text
   innerHTML   -> HTML tags bhi chalte hai
================================ */
title.textContent = "DOM Revision Shuru";
// title.innerHTML = "<i>Italic Title</i>"; // try karke dekh


/* ================================
   4. STYLE / ATTRIBUTE BADALNA
================================ */
const styleDemo = document.getElementById("styleDemo");
styleDemo.style.color = "blue";
styleDemo.style.fontSize = "20px";

styleDemo.setAttribute("data-info", "styled-by-js"); // naya attribute jodo
console.log("Attribute value:", styleDemo.getAttribute("data-info"));


/* ================================
   5. CLASSLIST
   add / remove / toggle / contains
================================ */
const toggleBtn = document.getElementById("toggleBtn");
const classDemo = document.getElementById("classDemo");

toggleBtn.addEventListener("click", function () {
  classDemo.classList.toggle("active"); // agar class hai to hatao, nahi to jodo
});


/* ================================
   6. CREATE / REMOVE ELEMENT
   createElement -> naya tag banao
   appendChild   -> DOM me daalo
   remove()      -> hatao
================================ */
const addItemBtn = document.getElementById("addItemBtn");
const list = document.getElementById("list");

addItemBtn.addEventListener("click", function () {
  const li = document.createElement("li");   // naya element banaya
  li.textContent = "New Item";                // uska text set kiya
  list.appendChild(li);                       // list me jod diya
});


/* ================================
   7. EVENTS
   addEventListener("event", function)
================================ */
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});


/* ================================
   8. EVENT DELEGATION
   Ek hi parent pe listener, e.target se pata chalta hai
   kaunsa child click hua (naye add hue elements pe bhi kaam karta hai)
================================ */
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done"); // click karke item ko "done" mark karo
  }
});


/* ================================
   9. TRAVERSAL
   parentElement, children, nextElementSibling, previousElementSibling
================================ */
const childSpan = document.getElementById("childSpan");

console.log("Child ka parent:", childSpan.parentElement);
console.log("Parent ke saare children:", document.getElementById("parentDiv").children);


/* ================================
   10. FORMS
   input.value se current typed text milta hai
================================ */
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

nameInput.addEventListener("input", function () {
  output.textContent = nameInput.value;
});


/* =====================================================
   FINAL PRACTICE: TODO LIST
   (Sab concepts ek saath: create, append, delegation, classList, remove)
===================================================== */
const todoInput = document.getElementById("todoInput");
const todoAddBtn = document.getElementById("todoAddBtn");
const todoList = document.getElementById("todoList");

// Add naya todo
todoAddBtn.addEventListener("click", function () {
  const text = todoInput.value.trim();
  if (text === "") return; // khali input pe kuch mat karo

  const li = document.createElement("li");
  li.textContent = text;

  // Delete button banao har todo ke andar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  todoInput.value = ""; // input khali karo
});

// Event Delegation: click ya to "done" toggle karega ya delete karega
todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove(); // delete button dabaya -> pura li hata do
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("done"); // li pe click -> done mark karo
  }
});


