const createXHR = function(method, url, data, callback){
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = callback;
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.send(data);
};

const showDetails = function () {
  let res = this.responseText;
  let detailsDiv = document.querySelector("#details");
  detailsDiv.innerText = res;
}

const fetchDetails = function(){
  let username = document.getElementById("username").value;
  createXHR("POST", "/fetch", `username=${username}`, showDetails);
};
