import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import {
    FlatList,
    Image,
} from 'react-native';
import DATA from './test'







type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Lista = () => {
    return (
<View>
        <FlatList
            data={DATA}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image source={item.img} style={styles.img} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            )}
        />
</View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginTop: StatusBar.currentHeight
    },
    item: {
        backgroundColor: '#aaa',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 6,
        flexDirection: 'row'
    },
    title: {
        fontSize: 32,
    },
    img: {
        width: 50,
        height: 50,
        margin: 'auto',
        marginRight: 10
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
});

export default Lista;