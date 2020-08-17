import React from 'react';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            darkMode: localStorage.getItem('darkMode') === null ? false : JSON.parse(localStorage.getItem('darkMode'))
        };
    }

    handleClick() {
        let toogleDarkMode = this.savePreferences();

        this.changeTheme(toogleDarkMode);
    }

    savePreferences() {
        let toogleDarkMode = !this.state.darkMode;
        this.setState({ darkMode: toogleDarkMode });
        localStorage.setItem('darkMode', toogleDarkMode);
        return toogleDarkMode;
    }

    changeTheme(toogleDarkMode) {
        const appContainer = document.querySelector('.app-container');
        if (toogleDarkMode) {
            appContainer.classList.add('dark-mode');
        }
        else {
            if (appContainer.classList.contains('dark-mode')) {
                appContainer.classList.remove('dark-mode');
            }
        }
    }

    render() {
        return (
            <button onClick={() => this.handleClick()} className="app__dark-mode-btn icon level-right">
                <FontAwesomeIcon icon={this.state.darkMode ? faSun : faMoon} color={this.state.darkMode ? '#FFA500' : '#4D5B6B'} />
            </button>
        );
    }


}