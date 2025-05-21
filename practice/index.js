let counter = 0;
const log = () => {
    console.log("Debounced call",counter++);
}

const debounce = function (fn,delay){
    let timer;
    return function () {
        let context= this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,args);
        },delay);
    }
}


const debouncedLog = debounce(log,300);