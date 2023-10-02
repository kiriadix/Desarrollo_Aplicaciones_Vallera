import { StyleSheet } from "react-native";    

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 55,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#82E0AA',
        color: '#212121'
    },
    itemContainer: {
        marginVertical:5,
        backgroundColor:'#82E0AA',
        height: 60,
        borderRadius: 5,
        justifyContent: 'center'
    },
    item:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
        
    },
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
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20
    }
});