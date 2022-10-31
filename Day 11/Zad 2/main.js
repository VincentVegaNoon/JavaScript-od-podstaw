const nowTime = new Date().getTime();
const endTime = new Date('2023-01-25 22:34:00').getTime();

setInterval(()=> {
    const time = endTime - nowTime
    console.log(time)
}, 1000)