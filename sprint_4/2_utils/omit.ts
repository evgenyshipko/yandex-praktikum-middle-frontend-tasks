console.log(omit({ name: 'Benjy', age: 18 }, [ 'name' ])); // => { age: 18 }

// omit(obj: Object, fields: string[]): Object
function omit<T extends object>(obj: T, fields: (keyof T)[]) {
    fields.forEach((field) => {
        delete obj[field]
    })
    return obj
}
