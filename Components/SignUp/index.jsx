import React, { useContext } from 'react'
import { StyleSheet, Text, View,StatusBar,Button, TextInput,Dimensions,TouchableOpacity,Keyboard,TouchableWithoutFeedback } from 'react-native'
import { myColors } from '../../Config/Color';
import * as Yup from 'yup';
import Sign from '../../assets/SignUp.svg';
import { ListContext } from '../../Context/ListContext';
import { Formik } from 'formik';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;


export default function SignUp({navigation}){
  const [Users,setUsers] = useContext(ListContext);
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}} >
    <View style={styles.SignUp}>
      <Sign height={300} width={300}/>
      <View>
        <Text style={styles.head}>SignUp</Text>
        <Formik 
          initialValues={{
            UserName:'',
            email:'',
            password:''
          }}


          validationSchema={
            Yup.object().shape({
              UserName:Yup.string().max(30,"Too long name").min(5,"Too short name").required("Field Required"),
              email:Yup.string().email('invalid email').required('Field Required'),
              password:Yup.string().min(6,"password must be atleast greater than 6 letters").required("field required")
            })
          }

          onSubmit={(values,{resetForm})=>{
            console.log(values);
            setUsers([...Users,values]);
            navigation.navigate('Log');
            resetForm({values:''});
          }}
        >
          {
            ({values,handleChange,handleBlur,handleSubmit,errors,touched})=>
              (
                <View>
                <View style={styles.field}>
                  <TextInput 
                  style={styles.textInp} 
                  placeholder={'UserName'} 
                  keyboardType={"default"}
                  onChangeText={handleChange('UserName')}
                  onBlur={handleBlur('UserName')}
                  value={values.UserName}
                  />
                  {(errors.UserName && touched.UserName && <Text style={styles.err}>{errors.UserName}</Text>)}
                </View>
                <View style={styles.field}>
                  <TextInput 
                  style={styles.textInp} 
                  placeholder={'Email Id'} 
                  keyboardType={"default"}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  />
                  {(errors.email && touched.email && <Text style={styles.err}>{errors.email}</Text>)}
                </View>
                <View style={styles.field}>
                  <TextInput 
                  style={styles.textInp} 
                  placeholder={'Password'} 
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  />
                  {(errors.password && touched.password && <Text style={styles.err}>{errors.password}</Text>)}
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.btnTxt}>Submit</Text>
                </TouchableOpacity>
              </View>
              )
          }
        </Formik>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    SignUp:{
        maxHeight:ScreenHeight+100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:myColors.primary
    },
    head:{
      color:myColors.tertiary,
      borderColor:myColors.tertiary,
      borderBottomWidth:2,
      paddingBottom:10,
      // alignSelf:'center',
      fontSize:40,
      margin:20
    },
    field:{
      padding:5,
      paddingVertical:5,
      margin:10,
    },  
    textInp:{
      borderColor:myColors.secondary,
      paddingHorizontal:2,
      paddingVertical:8,
      borderBottomWidth:2,
      width:300,
      fontSize:20
    },
    btn:{
      height:50,
      width:ScreenWidth-100,
      marginVertical:30,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
      alignSelf:'center',
      backgroundColor:myColors.tertiary,
    },
    btnTxt:{
      fontSize:25,
      color:myColors.primary,
    },
    err:{
      color:'red',
      fontSize:12,
      paddingTop:5
    }
})