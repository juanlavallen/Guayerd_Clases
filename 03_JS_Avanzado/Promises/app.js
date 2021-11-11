function myDisplayer(some) {
    document.getElementById("promesa").innerHTML = some;
}

let myPromise = new Promise((resolve, reject) => {
    let x = 0;
    if(x == 0) {
        resolve("OK");
    } else {
        reject("Error");
    }
});

myPromise.then((value) => {
    myDisplayer(value);
});

myPromise.catch((value) => {
    myDisplayer(value);
});