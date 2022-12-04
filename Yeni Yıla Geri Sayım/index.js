const yilbasiTarih = new Date('Jan 1,2023 00:00:00').getTime();

function yilbasiKalan() {

    const simdikiTarih = new Date().getTime();
    const gap = yilbasiTarih - simdikiTarih;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor((gap / day));
    console.log(d);

    let h = Math.floor((gap % day) / hour);
    console.log(h);

    let m = Math.floor((gap % hour) / minute);
    console.log(m);

    let s = Math.floor((gap % minute) / second);
    console.log(s);

    document.getElementById('day').innerHTML = d + " gün";
    document.getElementById('hour').innerHTML = h + " saat";
    document.getElementById('minute').innerHTML = m + " dakika";
    document.getElementById('second').innerHTML = s + " saniye";


}

setInterval(() => {
    yilbasiKalan();
}, 1000)




















