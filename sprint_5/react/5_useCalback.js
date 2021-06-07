import React, { PureComponent, memo, useCallback } from "react";

const functionsCounter = new Set();

const Children = memo(({ counterOne, counterTwo }) => {
    const handleOneClick = useCallback(() => {
        console.log(counterOne < 5 ? 'В чем сила, брат?' : 'Вся сила в правде!');
    }, [counterOne])

    const handleOtherOneClick = useCallback(() => {
        console.log(counterOne < 5 ? 'Кто выиграл' : 'Тот и победил');
    }, [counterOne])

    const handleTwoClick = useCallback(() => {
        console.log(counterTwo < 5 ? 'Время лечит' : 'Но за деньги быстрее');
    }, [counterTwo])

    functionsCounter.add(handleOneClick);
    functionsCounter.add(handleOtherOneClick);
    functionsCounter.add(handleTwoClick);

    console.log(functionsCounter.size);

    return (
        <div>
            <p onClick={handleOneClick}>Нажми на меня и посмотри в консоли мюсли №1</p>
            <p onClick={handleOtherOneClick}>Нажми на меня и посмотри в консоли мюсли №2</p>
            <p onClick={handleTwoClick}>Нажми на меня и посмотри в консоли мюсли №3</p>
        </div>
    );
});

export default class App extends PureComponent {
    state = {
        counterOne: 0,
        counterTwo: 0,
    };

    countOne = () => {
        const { counterOne } = this.state;

        this.setState({ counterOne: counterOne + 1 });
    };

    countTwo = () => {
        const { counterTwo } = this.state;

        this.setState({ counterTwo: counterTwo + 1 });
    };

    render() {
        const { counterOne, counterTwo } = this.state;

        return (
            <React.Fragment>
                <Children counterOne={counterOne} counterTwo={counterTwo}/>

                <hr/>
                <br/>
                <br/>

                <button onClick={this.countOne}>Первый счётчик [{counterOne}]</button>
                <button onClick={this.countTwo}>Второй счётчик [{counterTwo}]</button>
            </React.Fragment>
        );
    }
}
