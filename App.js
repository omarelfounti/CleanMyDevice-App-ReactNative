import React from 'react';

import { StyleSheet, Text, Button, View } from 'react-native';

class App extends React.Component {

render() {

return (

<View style = {styles.container}>
 


<Text style={styles.header}>Clean my Device

</Text>







<Data1 />

<Data2 />

<Data3 />

<Data4 />



</View>


);

}

}



class Data1 extends React.Component {

render() {

return (

<View style = {styles.color1}>


<Button title='Delete duplicate files' />

</View>

)

}

}

class Data2 extends React.Component {

render() {

return (

<View style = {styles.color2}>

<Button title='Clear junk files' />

</View>

)

}

}

class Data3 extends React.Component {

render() {

return (

<View style = {styles.green}>


<Button title='Factory data reset' />

</View>

)

}

}
class Data4 extends React.Component {

render() {

return (

<View style = {styles.data4}>


<Button title='Delete screenshots' />

</View>

)

}

}


const styles = StyleSheet.create({

container: {

flex: 1,

backgroundColor: 'lightblue',

alignItems: 'center',

justifyContent: 'center',

borderColor: '#888800',


},

header:{
margin:50,
fontSize:20,
color:'Black',
fontWeight: 'bold',
marginTop: 1,

}

});
export default App;