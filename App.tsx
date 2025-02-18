
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Todoinp from './src/components/Todoinp';

interface Todo{
  id:string;
  text:string;
  completed: boolean
}


function App(): React.JSX.Element {
  
const [todoList, setTodoList] = useState<Todo[]>([])

const addTodo = (text:string) => {
  console.log(text);
setTodoList([...todoList,{
  id: Date.now().toString(),
  text, completed :false
}])
}
  return (
    <View>
      <Todoinp onAddTodo={addTodo} />
    </View>
  );
}

export default App;
