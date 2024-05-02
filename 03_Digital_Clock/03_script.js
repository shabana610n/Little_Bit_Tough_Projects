let clock = document.getElementById('clock')

setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);  // 1000 is euqal to one second demonstrating that change time after every second!