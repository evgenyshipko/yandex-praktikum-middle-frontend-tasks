/*

Перебор сочетаний строк
Дан список слов. Каждое слово представлено массивом возможных вариантов нормализации.
Напишите функцию, которая принимает список слов и возвращает функцию,
которая при каждом вызове возвращает строку — одно из возможных сочетаний вариантов слова в предложении.
Пока не вернёт все возможные варианты.
Если все возможные варианты закончились, нужно вернуть undefined.
Важно: не используйте итераторы и рекурсию.

Подсказка:
Здесь пригодится замыкание, поскольку нужно «помнить» какое сочетание было последним.
Проще всего складывать пары последовательно и «запоминать» последнюю комбинацию по индексам использованных слов.
Возьмем пример из задания. Есть массив [['внучка', 'внучок'], ['маша', 'махать', 'машу']].
Первое предложение, которое получили — это 'внучка маша'.
То есть берём в первом подмассиве элемент с индексом 0 и добавляем к нему элемент из второго подмассива с таким же индексом.
Запомнили эту пару индексов.
При следующем вызове nextSentence() получим 'внучка махать'. Как?
Правильно, поскольку комбинация с индексами 0 и 0 уже была, значит берём следующий элемент второго подмассива, то есть теперь в предложении использованы элементы с индексами 0 и 1.
Если мы дошли до конца второго подмассива, а у первого ещё есть элементы, значит берём у него следующее слово и начинаем сначала. То есть 'внучок маша' (индексы 1 и 0), потом 'внучок махать' (индексы 1 и 1) и так, пока не переберём все варианты.
Не забывайте, что подмассивов может быть больше, чем два.

*/

function allSentences(words) {
    let globalIndex = 0
    const wordsArr = []
    function getListIndex(listLength){
        return globalIndex % listLength
    }
    return function(){
        const phraseWords = words.map(wordList => wordList[getListIndex(wordList.length)])
        globalIndex++
        const word = phraseWords.join(" ")
        if (!wordsArr.includes(word)){
            wordsArr.push(word)
            return word
        }
        return undefined
    }
}

const next = allSentences([
    ['внучка', 'внучок'],
    ['маша', 'махать', 'машу']
])

console.log(next())
console.log(next())
console.log(next())
console.log(next())
console.log(next())
console.log(next())
console.log(next())
