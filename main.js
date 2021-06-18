function scrollToBottom(){
  window.scrollTo(0,document.querySelector(".chat").scrollHeight);
}
function funcOnclick(){
    let vardas = document.getElementById("vardas_id").value;
    let zinute = document.getElementById("zinute_id").value;
    let location = document.getElementById("zinutes");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "zinuciu_container");
    newDiv.className = "alert alert-primary zinute";
    let msg = `
      <span id="vardas">${vardas}</span>
      <span id="zinute">${zinute}</span>
    `;
    newDiv.innerHTML = msg;
    // let newSpan2 = newDiv.innerHTML = msg2;
    // newDiv.appendChild(newSpan1);
    // newDiv.appendChild(newSpan2);
    location.appendChild(newDiv);
    scrollToBottom()
}

window.onload = function() { 
  let myg = document.getElementById("button");
  myg.onclick = funcOnclick;
  
}
