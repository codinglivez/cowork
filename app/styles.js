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
  });

  export { styles };