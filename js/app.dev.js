const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const getTiempo = () => {
    const fecha = new Date;
    const hor = fecha.getHours();
    const min = fecha.getMinutes();
    const seg = fecha.getSeconds();
    horas.innerHTML = hor;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;
    setTimeout(getTiempo, 1000);
}
