function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    setInterval(console.log,1000,time);
}
setInterval(printTime, 1000);