import React, { Component, PureComponent }  from 'react';

class MySuperComponent extends PureComponent {
    render() {
        const { name } = this.props;
        console.log(`Имя: ${name}`);

        return <h1>{name}</h1>;
    }
}

export default class App extends Component {
    state = {
        name: "Пупа",
        dummy: false
    };

    toggleMessage = () => {
        const { name } = this.state;
        this.setState({ name: name === "Пупа" ? "Лупа" : "Пупа" });
    };

    toggleDummy = () => {
        this.setState({ dummy: !this.state.dummy });
    };

    render() {
        const { name } = this.state;

        console.log("Рендер App");

        return (
            <React.Fragment>
                <MySuperComponent name={name}/>
                <button onClick={this.toggleMessage}>Изменить сообщение</button>
                <button onClick={this.toggleDummy}>Сделать пустое изменение</button>
            </React.Fragment>
        );
    }
}
