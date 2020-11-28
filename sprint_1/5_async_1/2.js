function foo(callback) {
    setTimeout(function() {
        callback('A');
    }, Math.random()*100);
}

function bar(callback) {
    setTimeout(function() {
        callback('B');
    }, Math.random()*100);
}

function baz(callback) {
    setTimeout(function() {
        callback('C');
    }, Math.random()*100);
}

function fooPromise() {
    return new Promise(function(resolve) {
        foo((i) => {resolve(console.log(i))})
    });
}

function barPromise() {
    return new Promise(function(resolve) {
        bar((i) => {resolve(console.log(i))})
    });
}

function bazPromise() {
    return new Promise(function(resolve) {
        baz((i) => {resolve(console.log(i))})
    });
}

fooPromise().then(() => {
    barPromise().then(() => {
        bazPromise()
    })
})

