
/*
Дана строка S произвольной длины N, в которой существует только два символа:
I (increase),
D (decrease).
Необходимо реализовать такую перестановку A, чтобы для всех i=[0, 1, ..., N - 1] были верны следующие правила:
Если S[i] === 'I' ⇒ A[i] < A[i+1];
Если S[i] === 'D' ⇒ A[i] > A[i+1].
Сложность алгоритма по времени — O(n).

Подсказка:
Нужно отслеживать минимальное и максимальное значения. Вначале это старт и конец ряда i.
Если элемент в строке равен "I", в результат нужно добавить минимальное значение, после чего увеличить это значение в переменной на единицу.
Если элемент в строке равен "D", добавляем максимальное значение и уменьшаем его в переменной тоже на один.
Иначе просто добавляем в результат минимальное значение.


 */



function match(arg) {
    const symbolArr = arg.split('')
    let min = 0
    let max = symbolArr.length
    const resultList = []
    symbolArr.forEach((symbol, index) => {
        if(symbol === 'I'){
            resultList.push(min)
            if(index === symbolArr.length - 1){
                resultList.push(min + 1)
            }
            min++
        }else{
            resultList.push(max)
            if(index === symbolArr.length - 1){
                resultList.push(max - 1)
            }
            max--
        }
    })
    return resultList
}

console.log(match('III')) // [0,1,2,3]
console.log(match('DDI')) // [3,2,0,1]
console.log(match('IDID')) // [0,4,1,3,2]
