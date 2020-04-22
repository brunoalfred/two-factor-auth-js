const theCode = (delay) => {
    console.log(`Hello World ${delay}  seconds`);
}

setTimeout(theCode, 3 * 1000, 4); 

setTimeout(theCode, 4 * 1000, 8) ;