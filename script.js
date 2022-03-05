const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load  = 0

// increment the load in ms 
let interval = setInterval(blur, 30)

function blur() {
    load++

    // stop the interval at 100
    if (load > 99) {
        clearInterval(interval)
    }

    // change the html state
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //setup the blur on the image
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
 // javascript jQuery map a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
