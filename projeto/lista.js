import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native';



type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Lista = () => {
    return (

        <FlatList
            data={DATA}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image source={item.img} style={styles.img} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            )}
        />


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
    }
});

export default Lista;