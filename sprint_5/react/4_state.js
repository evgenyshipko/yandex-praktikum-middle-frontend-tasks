import React, { Component, PureComponent, memo } from "react";

const Close = memo(({onClick}) => {
    return <span style={{ marginLeft: 16 }} onClick={onClick}>Очистить</span>;
});

class Input extends PureComponent {
    render() {

        const { clearValue, setValue, value } = this.props

        return (
            <label>
                <input onChange={setValue} value={value} />
                <Close onClick={clearValue} />
            </label>
        );
    }
}

export default class App extends Component {
    state = {
        value: ""
    };

    setValue = (event) => {
        this.setState({value: event.target.value})
    }

    clearValue = (event) => {
        this.setState({value: ""})
    }

    render() {
        const { value } = this.state;

        return (
            <React.Fragment>
                <h1>Value is [{value}]</h1>
                <Input setValue={this.setValue} clearValue={this.clearValue} value={value} />
            </React.Fragment>
        );
    }
}
