// import {MDBBtn, MDBCheckbox, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit"
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup'
import {getCalls, postCalls} from "../../API/axios.js";
import {LOGIN, REGISTER} from "../../Constants/constants.js";
import {ToastContainer, toast} from 'react-toastify';
import {useNavigate} from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_ENV;
const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid Email")
        .required("Required"),
    password: Yup.string()
        .min(6, "Too Short")
        .required("Required")
});


const Login = () => {
    const navigate = useNavigate();
    const getFormValues = async (values) => {
        const {email, password} = values
        if (email !== undefined && password !== undefined) {
            const registerUrl = url + LOGIN
            const data = await postCalls(registerUrl, values);
            if (data.data.status === 200) {
                const token = data.data.token
                if (token) {
                    localStorage.setItem('token', token)
                }
                toast("Login Successful")
                navigate('/profile')
            } else {
                console.log("here login")
                toast.error('🦄 Invalid Credentials');
            }
        }

    }
    return (
        <>
            <div className="container" >
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 userForms">
                        <div className="card" style={{background: "yellow"}}>
                            <div className="card-body">
                                {/*<div className="card" style="width: 18rem;">*/}
                                <h1>Login</h1>
                                <Formik initialValues={{
                                    firstName: '',
                                    email: '',
                                    password: ''
                                }} validationSchema={SignupSchema}
                                        onSubmit={values => getFormValues(values)}>
                                    {({errors, touched}) => (
                                        <Form>
                                            <div className="form-group userfields">
                                                <label htmlFor="exampleInputEmail1">Email address</label>

                                                <Field name="email"
                                                       class="form-control " id="exampleInputEmail1"
                                                       aria-describedby="emailHelp"
                                                       placeholder="Enter Email"
                                                />
                                                {errors.email && touched.email ? (<div className="errors-formik">
                                                    {errors.email}
                                                </div>) : null}
                                            </div>
                                            <div className="form-group userfields">
                                                <label htmlFor="exampleInputEmail1">Password</label>

                                                <Field name="password"
                                                       type="password"
                                                       class="form-control " id="exampleInputEmail1"
                                                       aria-describedby="emailHelp"
                                                       placeholder="Enter Password"
                                                />
                                                {errors.password && touched.password ? (<div className="errors-formik">
                                                    {errors.password}
                                                </div>) : null}
                                            </div>

                                            <button type="submit" className="btn btn-primary register-btn">Submit
                                            </button>
                                        </Form>
                                    )}

                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login