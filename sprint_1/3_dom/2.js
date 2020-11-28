'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const tbody = document.getElementsByTagName('tbody')[0]
    const trArr = tbody.querySelectorAll('tr')

    console.log(trArr)

    trArr.forEach((row) => {
        const tdArr = row.getElementsByTagName('td')

        const dataRole = tdArr[3].getAttribute('data-role')
        console.log('dataRole',dataRole)
        if(dataRole !== null){
            row.classList.add(dataRole)
        }else{
            row.setAttribute('hidden', 'true')
        }

        const gender = tdArr[2].innerHTML
        if(gender === 'm'){
            row.classList.add('male')
        }else if(gender === 'f'){
            row.classList.add('female')
        }

        const age = parseInt(tdArr[1].innerHTML)
        console.log(age)
        if(age < 18){
            row.setAttribute('style', 'text-decoration: line-through')
        }

        console.log(row.attributes)
    })


}
