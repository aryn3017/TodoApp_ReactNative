import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

interface Todo{
    id:string;
    text:string;
    completed : boolean
}

interface TodoInputProps {
    onAddTodo : (text:string)=>void
}

const Todoinp: React.FC<TodoInputProps> = ({onAddTodo}) =>  {
    const [text, setText] = useState('')

    const handleAddTodo=()=>{
        if(text.trim()){
            onAddTodo(text.trim())
            setText('')
        }
    }
    return(
        <View>
            <Text style={styles.heading}>TODO APP</Text>
            <View  style={styles.container}>
            <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Enter Your Todo ..."
            style={styles.inpt} />
            <TouchableOpacity onPress={handleAddTodo} style={[styles.btn,{backgroundColor:'green'}]}>
                <Text style={{color:'white',margin:'auto', fontWeight:'bold', fontSize:15}}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn,{backgroundColor:'red'}]}>
                <Text style={{color:'white',margin:'auto', fontWeight:'bold', fontSize:15}}>DEL</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row', alignItems:'center',
    },
    heading:{
        fontWeight:'bold',fontSize:30,
        color:'green',marginHorizontal:'auto',borderWidth:2,borderColor:'grey',
        marginTop:10, backgroundColor:'#fff029'
    },
    inpt:{
        margin:10, borderRadius:10, borderColor:'black',
        borderWidth:1,flex:6,
    },
    btn:{
        flex:1,margin:2, padding:10
    }
    
})
export default Todoinp;