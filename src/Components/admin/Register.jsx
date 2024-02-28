// import {MDBBtn, MDBCheckbox, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit"
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup'
import {getCalls, postCalls} from "../../API/axios.js";
import {REGISTER} from "../../Constants/constants.js";

const url = import.meta.env.VITE_BACKEND_ENV;

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, "Too Long")
        .required('Required'),
    email: Yup.string()
        .email("Invalid Email")
        .required("Required"),
    password: Yup.string()
        .min(6, "Too Short")
        .required("Required"),
    username: Yup.string()
        .required("Required")
});

const getFormValues = async (values) => {
    const {email, firstName, password, username} = values
    if (email !== undefined && firstName !== undefined && password !== undefined && username !== undefined) {
        console.log("here")
        const registerUrl = url + REGISTER
        const data = await postCalls(registerUrl, values);
        await console.log(data);
    } else {
        console.log("here not")
    }


}
const Register = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 userForms">
                        <div className="card" style={{background: "yellow"}}>
                            <div className="card-body">
                                {/*<div className="card" style="width: 18rem;">*/}
                                <h1>Sign up</h1>
                                <Formik initialValues={{
                                    firstName: '',
                                    email: '',
                                    password: ''
                                }} validationSchema={SignupSchema}
                                        onSubmit={values => getFormValues(values)}>
                                    {({errors, touched}) => (
                                        <Form>
                                            <div className="form-group userfields">
                                                <label htmlFor="exampleInputEmail1">First Name</label>

                                                <Field name="firstName"
                                                       class="form-control " id="exampleInputEmail1"
                                                       aria-describedby="emailHelp"
                                                       placeholder="Enter First Name"
                                                />
                                                {errors.firstName && touched.firstName ? (
                                                    <div className="errors-formik">{errors.firstName}</div>
                                                ) : null}
                                            </div>
                                            <div className="form-group userfields">
                                                <label htmlFor="exampleInputEmail1">Username</label>

                                                <Field name="username"
                                                       class="form-control "
                                                       aria-describedby="emailHelp"
                                                       placeholder="Enter Username"
                                                />
                                                {errors.username && touched.username ? (
                                                    <div className="errors-formik">{errors.username}</div>
                                                ) : null}
                                            </div>
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

export default Register