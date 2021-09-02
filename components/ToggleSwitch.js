import React, { useContext } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../theme/theme-context';

const ToggleSwitch = () => {
    const { dark, theme, toggle } = useContext(ThemeContext);

    return (
        <View style={[styles.container,{ backgroundColor: theme.backgroundColor }]} >
             <View style = {styles.containerSwitch}>
                 <Switch 
                 trackColor={{ false: "#767577", true: "#ccc" }}
                 thumbColor={dark ? "#fff" : "#f4f3f4"}
                 onClick={toggle} value = {dark} />
             </View>
           
        </View>
    );
}

export default ToggleSwitch;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "10vh",
     
    },
    containerSwitch:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "10vh",
        width: "100%",
        
    },
  
});