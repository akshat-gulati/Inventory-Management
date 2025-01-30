import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button}>
                    <Text style={styles.btnText}>All Items</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.btnText}>Low Stock</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.btnText}>Create Title</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: '4%',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: '4%',
        marginVertical: 10,

    },
    button: {
        borderColor: 'green',
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 0.8,

    },
    btnText: {
        color: 'green',
        fontSize: 12

    }

})