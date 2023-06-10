import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginimg: {
      height:60, 
      width:60,
      marginTop: 100,
      alignSelf: "center",
    },
    loginheading: {
      fontSize: 40,
      fontWeight: "400",
      textAlign:"center",
    },
    regheading: {
        fontSize: 40,
        fontWeight: "400",
        marginTop: '20%',
      },
    main: {
      flex: 1,
      marginHorizontal: "auto",
    },
    inputarea: {
      flex: 1,
      marginVertical: 60,
      marginHorizontal: '10%',
      maxHeight: 200,
    },
    reginputarea: {
        flex: 1,
        marginVertical: 60,
        marginHorizontal: '10%',
        maxHeight: 600,
      },
    input: {
      alignSelf: "center",
      borderColor: "#E2E2E2",
      backgroundColor: "#F9F9F9",
      borderWidth: 1,
      flex: 1,
      marginRight: 2,
      width: '100%',
      maxHeight: 50,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginBottom: 15,
    },
    bottombtn: {
      flex: 1,
      justifyContent: 'flex-end',
      margin: 30,
    },
    loginbtn: {
      backgroundColor: "#5167EB",
      padding: '5%',
      alignItems: "center",
      borderRadius: 10,
    },
    logintxt: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#ffffff',
    },
    botomtxtprompt: {
        margin: 5,
        textAlign: "center"
    },
    dashhead: {
        flexDirection: 'row',
        marginVertical: '15%',
        marginHorizontal: '3%',
        alignItems: "center",
        justifyContent: "space-between",
        height: '5%',
    },
    dashtxt: {
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 5,
    },
    dashhdbtn: {
        padding: 10,
        backgroundColor: '#5167EB',
        borderRadius: 5,
        paddingHorizontal: 24,
    },
    dashcontent: {
        marginVertical: '20%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
    },
    contentbox: {
        backgroundColor: '#5167EB',
        padding: '10%',
        borderRadius: 14,
    },
    contenttxt: {
        fontSize: 20,
        left: -10,
        margin: 10,
    },
    pageheader: {
        marginVertical: '15%',
        flexDirection: 'row',
        alignItems: "center"
    },
    pghdimg: {
        height: 40,
        width: 40,
        marginHorizontal: 13,
    },
    pghdtext: {
        fontSize: 30,
    },
    bckcontent: {
        backgroundColor: '#DBDBDB',
        justifyContent: "center",
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
  });

  export { styles };