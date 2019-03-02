let timechange = (time,isMS) => {
    if(isMS){
        time = time / 1e3;
    }
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
export let dealtimetamptoms=(time)=>{
    if(typeof(time)!=="string"){
        return false
    }
    let m = time.match(/^(\d+)h (\d+)m (\d+)s/);
    return m[1]*3600+m[2]*60+m[3]   
    //处理"1h 20m 48s"这样的字符串时间 返回总共的秒数
}
export let dealtimetamptotamp=(time)=>{
    if(typeof(time)!=="string"){
        return false
    }
    let m = time.match(/^(\d+)h (\d+)m (\d+)s/);
    return `${addzero(m[1])}:${addzero(m[2])}:${addzero(m[3])}`  
}
export default timechange;