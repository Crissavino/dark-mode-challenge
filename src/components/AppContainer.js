import React from 'react';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: localStorage.getItem('darkMode') === null ? false : JSON.parse(localStorage.getItem('darkMode'))
        };

        this.appCont = React.createRef();
    }

    render() {
        const { children } = this.props;

        return (
            <div ref={this.appCont} className={`app-container ${this.state.darkMode ? 'dark-mode' : ''}`}>
                {children}
            </div>
        );
    }

}