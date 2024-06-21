import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginPage=()=>{
    return(
        <View style={{display:'flex',width:"280px",margin:'auto'}}>
            <Text style={{color:'pink',fontSize:'30px'}}>User Login</Text>
            <TextInput placeholder="Email" style={style.input}></TextInput>
            <TextInput placeholder="password" style={style.input}></TextInput>
            <Button style={style.button} title="login"/>
        </View>
    )
}

export default LoginPage;

const style=StyleSheet.create({
    input:{
        border:'1px solid',
        padding:'4px',
        marginTop:'8px',
        fontSize:'18px'
    },
    button:{
        backgroundColor:'blue',
        color:'white',
        textAlign:'center',
        padding:'4px',
        marginTop:'8px'
    }
});