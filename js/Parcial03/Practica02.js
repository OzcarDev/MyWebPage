let $btnTheme = document.querySelector("#btn-theme");


$btnTheme.addEventListener("click" ,(e)=> {
    if(document.body.classList.contains("dark-mode")){
        document.body.classList.remove("dark-mode");
        e.target.innerText = "🌙";
     }else {
        document.body.classList.add("dark-mode");
        e.target.innerText = "☀️";
    }
});


function networkStatus() {
    const $div = document.createElement("div");
  
    if (navigator.onLine) {
      $div.classList.add("online");
      $div.classList.remove("offline");
      $div.innerHTML = "<b>Conexión Reestablecida</b>";
    } else {
      $div.classList.add("offline");
      $div.classList.remove("online");
      $div.innerHTML = "<b>Conexión Perdida</b>";
    }
  
    document.body.appendChild($div);
  
    setTimeout(function () {
      document.body.removeChild($div);
    }, 3000);
  }
  
  window.addEventListener("online", networkStatus);
  window.addEventListener("offline", networkStatus);

  document.addEventListener("click", (e) => {
    if (!e.target.matches(`input[name = "user-icon"]`)) {
      return false;
    }
  
    $icon = document.querySelector("#user-image");
    $icon.src = e.target.dataset.theme;
    alert(`Has cambiado el icono de usuario ${e.target.dataset.name}`);
  });