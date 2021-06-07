import React, { Component }  from 'react';

const AppContext = React.createContext();

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    render() {
        return (
            <AppContext.Provider value={{
                data: this.state.data,
                onChangeField: (name, value) => {
                    this.setState(
                        {
                            ...this.state,
                            data: {
                                ...this.state.data,
                                [name]: value
                            }
                        })
                }
            }}>
                <div>
                    <span id="result">{JSON.stringify(this.state.data)}</span>
                    {this.props.children}
                </div>
            </AppContext.Provider>);
    }
}

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    _handleChange = (e) => {
        const { value } = e.target;
        this.setState({ value });
    }

    render() {
        return (<div>
            <AppContext.Consumer>
                {
                    (data) =>
                        (<input
                            type="text"
                            name={this.props.name}
                            value={data.data[this.props.name] ? data.data[this.props.name] : ""}
                            onChange={(e) => {
                                const { value } = e.target
                                data.onChangeField(this.props.name, value)
                            }}
                        />)
                }
            </AppContext.Consumer>

        </div>)
    }
}

export default class App extends Component {
    render() {
        return <Form onChange={(data) => console.log("FormData: ", data)}>
            <Field name="firstName" />
            <Field name="lastName" />
        </Form>
    }
}
