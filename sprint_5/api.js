import React, { PureComponent } from "react";

export default class App extends PureComponent {
    static userName = "evgenyshipko";

    getLink(){
        return `https://api.github.com/users/${App.userName}/repos`
    }

    componentDidMount(){
        fetch(this.getLink())
            .then((response) => response.json())
            .then(data => this.setState({data: data}))
    }

    render() {

        console.log(this.state)

        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
            </React.Fragment>
        );
    }
}
