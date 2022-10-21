import { Avatar,Button,Grid,Paper,TextField,} from "@mui/material";
import React from "react";
import { FormControlLabel,Radio,RadioGroup,FormControl,FormLabel } from "@mui/material";
import { Formik,Field,Form,ErrorMessage, } from "formik";
import { FormHelperText } from "@mui/material";
import * as Yup from 'yup'

import './form.css';

import { useForm } from "react-hook-form"
const Signup=()=>{

    const paperStyle={padding :'30px 20px',height:'80vh',width:300,margin:"20px auto"}
    const avatarStyle={backgroundColor:"#1bbd7e"}
    const headerStyle={margin:0}
    const btnstyle={margin:"8px 0"}
    const marginTop={marginTop:5}
    const nameRegExp = /^[aA-zZ\s]+$/
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().matches(nameRegExp,"Invalid input").required("Required"),
        email: Yup.string().email("Invalid Email!Please enter valid email").required("Required"),
        gender: Yup.string().oneOf(["male", "female" , "others"], "Required").required("Required"),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Invalid mobile number').min(10, "Invalid mobile number").max(10, "Invalid mobile number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const { formState: { errors } } = useForm();
    
    return(

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>

                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                <Form>
                <Field as={TextField} id="standard-basic" label="Name" placeholder="Enter your name" name="name" variant="standard" helperText={<ErrorMessage name="name" />}  fullWidth/>
                <Field as={TextField} id="standard-basic" label="Email" placeholder="Enter email" name="email" variant="standard" helperText={<ErrorMessage name="email" />} fullWidth/>

                <FormControl component="fieldset" style={marginTop}>
                    <FormLabel id="demo-radio-buttons-group-label" component="legend">Gender</FormLabel>
                     <Field as={RadioGroup}
                        aria-labelledby="demo-radio-buttons-group-label" name="gender"
                    
                         style={{display:'initial'}}
                        >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="others" control={<Radio />} label="others" />
                        
                     </Field>
                    </FormControl>
                    <FormHelperText><ErrorMessage name="gender" /></FormHelperText>


                <Field as={TextField} id="standard-basic" name="phoneNumber" label="Mobile  Number" placeholder="Enter your phone no" variant="standard" helperText={<ErrorMessage name="phoneNumber" />} fullWidth/>
               
                
                <Field as={TextField} id="standard-basic" label="Password" placeholder="Enter password" variant="standard" type="password" name='password' fullWidth helperText={<ErrorMessage name="password" />}/>
                <Field as={TextField} id="standard-basic" label=" Confirm Password" placeholder="Enter confirm password" variant="standard" type="password" name="confirmPassword"  helperText={<ErrorMessage name="confirmPassword" />}fullWidth/>

                <Button type="submit" color="primary" variant="contained" style={btnstyle} disabled={props.isSubmitting} fullWidth>{props.isSubmitting ? "Loading" : "Sign up"}</Button>
                </Form>
                    )}
                </Formik>
                
            </Paper>
        </Grid>

        
    )  
}

export default Signup;