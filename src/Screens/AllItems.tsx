import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({ data }) => {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity</Text>
            </View>
            <FlatList contentContainerStyle={{gap:10}} data={data}
                keyExtractor={(item) => item.id} renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { backgroundColor: item.stock < 15 ? '#FFCCCC' : '#D7F6BF' }]}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.stock}</Text>
                    </View>)} />

        </View>
    )
}

export default AllItems

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
    headingText: {
        fontWeight: "500",
        fontSize: 16
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        borderRadius: 5
    },
    itemText: {
        fontWeight:"400",
        fontSize: 14
    }
})