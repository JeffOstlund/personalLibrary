"use strict";

function searchTable() {
  var input = document.getElementById("tableInput");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("bookTable");
  var tr = table.getElementsByTagName("tr");
  var td, i, textValue;
  for (i=0; i<tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0,1,2,3,4];
    if (td) {
      textValue = td.textContent || td.innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};