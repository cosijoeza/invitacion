function myMap() {
  myCenter = new google.maps.LatLng(41.878114, -87.629798);
  var mapOptions = {
    center: myCenter,
    zoom: 12, scrollwheel: false, draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function updateCountdown() {
  const now = new Date();

  // Si ya pasó la fecha, detener el contador
  if (now >= targetDate) {
    document.getElementById('months').innerText = '0';
    document.getElementById('days').innerText = '0';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    clearInterval(intervalId);
    return;
  }

  // --- CÁLCULO DE MESES Y DÍAS ---
  let yearsDiff = targetDate.getFullYear() - now.getFullYear();
  let monthsDiff = targetDate.getMonth() - now.getMonth();
  let totalMonths = (yearsDiff * 12) + monthsDiff;

  // Clonamos la fecha actual para proyectar el día exacto tras restar meses
  let tempDate = new Date(now.getTime());
  tempDate.setMonth(tempDate.getMonth() + totalMonths);

  // Si al añadir los meses nos pasamos del día/hora final, restamos un mes
  if (tempDate > targetDate) {
    totalMonths--;
    tempDate = new Date(now.getTime());
    tempDate.setMonth(tempDate.getMonth() + totalMonths);
  }

  // Los milisegundos restantes se calculan basándose en la fecha proyectada
  let millisecondsLeft = targetDate - tempDate;

  // --- DESGLOSE DE TIEMPO RESTANTE ---
  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  const days = Math.floor(millisecondsLeft / oneDay);
  const hours = Math.floor((millisecondsLeft % oneDay) / oneHour);
  const minutes = Math.floor((millisecondsLeft % oneHour) / oneMinute);
  const seconds = Math.floor((millisecondsLeft % oneMinute) / oneSecond);

  // --- RENDERIZAR EN EL HTML ---
  document.getElementById('months').innerText = totalMonths;
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

function timeLeft() {
  // Definir la fecha de destino: 9 de Enero de 2027 a las 08:00:00
  const targetDate = new Date(2027, 0, 9, 8, 0, 0); // Enero es el mes 0 en JS
  // Ejecutar inmediatamente y luego actualizar cada 1 segundo (1000ms)
  updateCountdown();
  const intervalId = setInterval(updateCountdown, 1000);
}