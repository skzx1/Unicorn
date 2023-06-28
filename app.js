function submit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("submit!!!");
    console.log(username);
    console.log(password);
  
    if(username == "admin" || password == "1234") {
      alert("welcome to unicorn")
      location.href = "home.html"
    }else {
      alert("try agian")
    }
  }
  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "-300px") {
        sidebar.style.right = "0";
    } else {
        sidebar.style.right = "-300px";
    }
}