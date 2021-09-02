import React, { createContext, useState } from 'react';
const themes = {
    dark: {
        backgroundColor: '#151618',
        backgroundToggleSwitch: '#25282c',
        color: 'white'
    },
    light: {
        backgroundColor: '#EFF0F3',
        backgroundToggleSwitch: '#fff',
        color: '#1d1d1d'
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
}
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false) 

    
    const toggle = () => {
        setDark(!dark)
  
    }

   
    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }