import React from 'react';

export class Button extends React.Component {
    render() {

        const { children } = this.props

        return (
            <button>
                {children}
            </button>
    );
    }
}
