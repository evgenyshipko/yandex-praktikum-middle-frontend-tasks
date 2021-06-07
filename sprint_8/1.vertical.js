
/*
Вертикальная ось симметрии
Дан массив точек с целочисленными координатами (x, y). Определите, существует ли вертикальная прямая, делящая точки на 2 множества, симметричных относительно этой прямой.
На вход подаётся массив из точек в формате [x, y]: [[0, 0], [1, 1], ...]. Если на вход подали не массив, необходимо вернуть ошибку 'points must be array'.
Если точек нет, можно считать, что такая прямая есть. То есть функция должна вернуть true, если в качестве аргумента передали пустой массив.
 */



/**
 * @param {([number, number])[]} points
 * @returns {boolean}
 */
function isSym(points) {
    if(!Array.isArray(points)) throw new Error('points must be array')

    if(points.length === 1 || points.length === 0) return true

    let averageX

    //сюда складываем точки, у которых нет пары по игрик
    const centerPointsArr = []

    for (let i = 0; i < points.length; i++){
        const pointI = points[i]
        const x = pointI[0]
        const y = pointI[1]
        let duplicateByY
        for (let j = 0; j < points.length; j++){
            const pointJ = points[j]
            if(i !== j && y === pointJ[1]){
                duplicateByY = pointJ
            }
        }
        if(!duplicateByY){
            // если у точки нет пары - складываем ее в массив
            centerPointsArr.push(pointI)
        }else if(duplicateByY[0] !== pointI[0]){
            const localAverage = Math.round(Math.abs(x + duplicateByY[0])/2)
            if(!averageX){
                averageX = localAverage
            }
            //если вычисленные средние значения различаются, значит точки не симметричны относительно прямой
            if(averageX && averageX !== localAverage) return false
        }
    }


    // проверяем что все точки, у которых не было пары по игрик - лежат на вертикали
    if(centerPointsArr.length > 0){
        const result = centerPointsArr.some(point => point[0] === averageX)
        if(!result) return false
    }

    //складываем точки левее вертикали в левый массив, правее - в правый
    const leftArr = []
    const rightArr = []
    points.forEach((point) => {
        if(point[0] < averageX){
            leftArr.push(point)
        }else if (point[0] > averageX){
            rightArr.push(point)
        }
    })

    return leftArr.length === rightArr.length
}


console.log(isSym([0, 0], [0, 0], [1, 1], [2, 2], [3, 1], [4, 0], [4, 0])) //true
console.log(isSym([0, 0], [0, 0], [1, 1], [2, 2], [3, 1], [4, 0]))  // false
console.log(isSym([])) //true
console.log(isSym([0, 0])) //true
console.log(isSym( [0, 0], [100500, 0])) //true
console.log(isSym([0, 0], [100500, 1]))  // false
console.log(isSym([0, 0], [1, 0], [3, 0]))  // false
