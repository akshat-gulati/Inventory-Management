import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'

const dummy = [
    
        { "id": 1, "name": "wheat", "stock": 10, "unit": "kg" },
        { "id": 2, "name": "rice", "stock": 20, "unit": "kg" },
        { "id": 3, "name": "corn", "stock": 15, "unit": "kg" },
        { "id": 4, "name": "apple", "stock": 30, "unit": "kg" },
        { "id": 5, "name": "banana", "stock": 25, "unit": "kg" },
        { "id": 6, "name": "orange", "stock": 18, "unit": "kg" },
        { "id": 7, "name": "tomato", "stock": 22, "unit": "kg" },
        { "id": 8, "name": "potato", "stock": 40, "unit": "kg" },
        { "id": 9, "name": "carrot", "stock": 35, "unit": "kg" },
        { "id": 10, "name": "broccoli", "stock": 12, "unit": "kg" },
        { "id": 11, "name": "spinach", "stock": 28, "unit": "kg" },
        { "id": 12, "name": "grapes", "stock": 16, "unit": "kg" },
        { "id": 13, "name": "mango", "stock": 14, "unit": "kg" },
        { "id": 14, "name": "strawberry", "stock": 19, "unit": "kg" },
        { "id": 15, "name": "blueberry", "stock": 10, "unit": "kg" }
]

const HomeScreen = () => {
    const [view, setview] = useState(0)


    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, view === 0 ? { backgroundColor: "#72C37AFF" } : null]} onPress={() => setview(0)}>
                    <Text style={[styles.btnText, view === 0 ? { color: "white" } : null]}>All Items</Text>
                </Pressable>
                <Pressable style={[styles.button, view === 1 ? { backgroundColor: "#72C37AFF" } : null]} onPress={() => setview(1)}>
                    <Text style={[styles.btnText, view === 1 ? { color: "white" } : null]}>Low Stock</Text>
                </Pressable>
                <Pressable style={[styles.button, view === 2 ? { backgroundColor: "#72C37AFF" } : null]} onPress={() => setview(2)}>
                    <Text style={[styles.btnText, view === 2 ? { color: "white" } : null]}>Create Title</Text>
                </Pressable>
            </View>
            {view === 0 && <AllItems data={dummy}/>}
            {view === 1 && <AllItems data={dummy.filter((item) => item.stock<15)} />}
            {view === 2 && <CreateScreen />}
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
        borderColor: '#72C37AFF',
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 0.8,

    },
    btnText: {
        color: '#72C37AFF',
        fontSize: 12

    }

})
