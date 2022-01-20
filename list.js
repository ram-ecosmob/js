const lists = [];

function display(list) {
  let listContainer = document.querySelector("#list");
  if (listContainer.childNodes.length > 0 && list.length > 0) {
    listContainer.innerHTML = "";
  }
  let ul = document.createElement("ul");
  listContainer.appendChild(ul);
  if (list.length < 1) {
    let h1 = document.createElement("li");
    h1.textContent = "No Item in the list";
    ul.appendChild(h1);
  }

  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    li.textContent = list[i];
    ul.appendChild(li);
  }
}
display(lists);


const addItem=()=>{
  let item = document.querySelector(".input-txt");
  if (item.value.length > 2) {
    if (!lists.includes(item.value)) {
      lists.push(item.value);
      item.value = ''

      display(lists);
    } else {
      alert("item already added");
    }
  } else {
    alert("Please enter item name atleast 2 chanractor");
  }
}

