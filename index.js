const div = document.querySelector('#addTxt');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const cleartext = document.querySelector('#cleartext');
const selecttext = document.querySelector('#selecttext');
const boldtext = document.querySelector('#boldtext');
const italictext = document.querySelector('#italictext');
const underlinetext = document.querySelector('#underlinetext');
const copytext = document.querySelector('#copytext');

uppercase.addEventListener('click', function(){
    upperCase();
});

lowercase.addEventListener('click', function(){
    lowerCase();
});

cleartext.addEventListener('click', function(){
    clearText();
});

selecttext.addEventListener('click', function(){
    selectText();
});

boldtext.addEventListener('click', function(){
    boldText();
});

italictext.addEventListener('click', function(){
    italicText();
});

underlinetext.addEventListener('click', function(){
    underlineText();
});

copytext.addEventListener('click', function(){
    copyText();
});




function upperCase(){
    div.value = div.value.toUpperCase();
}

function lowerCase(){
    div.value = div.value.toLowerCase();
}

function clearText(){
    div.value = "";
}

function selectText(){
    div.select();
    div.execCommand('copy');
}

function boldText(){
    var target = document.getElementById("addTxt");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}

function italicText(){
    var target = document.getElementById("addTxt");
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}

function underlineText(){
    var target = document.getElementById("addTxt");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}

function copyText(){

    div.select();
    // div.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(div.value);

    alert("Copied the text: " + div.value);
}



// Harry
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
