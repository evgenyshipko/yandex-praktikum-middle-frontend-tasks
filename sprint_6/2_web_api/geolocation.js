function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Данные можно посмотреть тут`;
    }

    function error() {
        status.textContent = 'Не получилось получить информацию';
    }

    if(!navigator.geolocation) {
        status.textContent = 'Не получилось получить информацию';
    } else {
        status.textContent = 'Ищем';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

const btn = document.querySelector("#find-me");
btn.addEventListener("click", geoFindMe);
