import React, { Component }  from 'react';
import { Cookie, Muffin } from './clickers';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    addClick = (value) => {
        this.setState(prevState => ({ ...prevState, count: prevState.count + value }));
    }

    render() {
        return <>
            <div id="result">Count {this.state.count}</div>
            {this.props.children(this.addClick)}
        </>;
    }
}

export default class App extends Component {
    render() {
        return <Counter>
            {
                addClick => <>
                    <Cookie onClick={addClick} />
                    <Muffin handleClick={addClick}/>
                </>
            }
        </Counter> ;
    }
}
