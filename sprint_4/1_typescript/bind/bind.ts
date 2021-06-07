// не удаляйте следующую строчку, без нее проект не соберётся
// eslint-disable-next-line
Function.prototype.bind = function(context: unknown, ...bindArgs: unknown[]){
    const func = this;
    return function(...args: unknown[]) {
        return func.apply(
            context,
            [...bindArgs,...args]
        );
    }
}
export default Function.prototype.bind



var F = function() {
    console.log('foo is', this ? this.foo : undefined);
}
var F1 = F.bind({ foo: 'bar' })

F()               // foo is undefined
F1()              // foo is bar

var f = new F()   // foo is undefined
var f1 = new F1() // foo is bar

console.log(f instanceof F)    // true
console.log(f1 instanceof F)   // false

