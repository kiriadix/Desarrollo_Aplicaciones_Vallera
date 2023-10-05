import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ModalContainter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
    },
    btnModalContainer: {
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    titleModal: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailModalContainer:{
        paddingVertical: 20,
    },
    detailModalMessage: {
        fontSize: 14,
        color: '#212121',
    },
    selectItemModal:{
        fontSize: 18,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
    }
});