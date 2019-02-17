let timechange = (time) => {
    time = time / 1e3;
    let realtime
    if (time < 864000) {
        let hour = addzero(Math.floor(time / 3600));
        let minute = addzero(Math.floor((time % 3600) / 60));
        let second = addzero(time % 60);
        realtime = `${hour}:${minute}:${second}`;
    } else {
        let day = Math.floor(time / 86400)
        let hour = addzero(Math.floor((time % 86400) / 3600));
        let minute = addzero(Math.floor((time % 3600) / 60));
        let second = addzero(time % 60)
        realtime = `${day}:${hour}:${minute}:${second}`;
    }
    return realtime
}
export let addzero = (num) => {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}

export default timechange;