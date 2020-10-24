/****************** Actions ******************/

const ul = document.querySelector("ul");
//const button = document.querySelector("button");
const tasks = document.getElementById("input");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
let checkedItems = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const toDoTask = JSON.parse(localStorage.getItem("items"));

/**
 * Create a "close" button
 * Permanently delete items and append it to each list item
 */
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

/** Add a "checked" symbol when clicking on a list item
 * Marks a list item as "done"
 */
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      checkedItems.push();
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Please input a task item for the to-do list!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  itemsArray.push(inputValue);
  localStorage.setItems("items", JSON.stringify(itemsArray));
}

/**
 * Show all to-do items when clicking on the "All" button
 */
var inputValue = document.getElementById("input").value;

var allBtn = document.getElementById("all");
allBtn.addEventListener("click", function showAll() {
  inputValue.get();
  inputValue.style.display = "block";
});

var doneBtn = document.getElementById("done");
doneBtn.addEventListener("click", function showDone() {
  checkedItems.style.display = "block";
});

var toDoBtn = document.getElementById("toDo");
toDoBtn.addEventListener("click", function showToDo() {
  itemsArray.pop(checkedItems);
  itemsArray.style.display = "block";
});

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function clearAll() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
