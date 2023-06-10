import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

const Home = () => {
    return (
        <View style={styles.main}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.loginimg} 
              />
              <Text style={styles.loginheading}>Co-working</Text>
              <View style={styles.inputarea}>
              <Text style={{fontSize:18, padding: 5}}>Mobile Number or Email</Text>
              <TextInput
                label="Email"
                returnKeyType="next"
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                style={styles.input}
              />
              <Text style={{fontSize:18, padding: 5}}>Password</Text>
              <TextInput
                label="Password"
                returnKeyType="done"
                secureTextEntry
                style={styles.input}
              />
            </View>
            <View style={styles.bottombtn}>
              <TouchableOpacity style={styles.loginbtn}>
                <Text style={styles.logintxt}>Log in</Text>
              </TouchableOpacity>
              <Text>New user?<TouchableOpacity><Text>Create an Account</Text></TouchableOpacity></Text>
            </View>
            <StatusBar style="auto"/>

        </View>
    )
}

export default Home;

