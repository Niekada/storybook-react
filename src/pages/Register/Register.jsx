import { Formik, Form, } from "formik"
import FormikInput from "../../components/Button/FormikInput";
import styled from "styled-components";
import { screenSize } from "../../consts/mediaQueries"
import Button from "../../components/Button/Button"
import * as Yup from "yup";
import { LOGIN_PATH } from "../../routes/const";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
        .required("Please retype your password.")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

const Register = () => {

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
        }, 2000);
    };

  return (
    <div>
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
            <StyledForm>
                <Title>Register Your Account</Title>
                <FormikInput 
                    name="firstName" 
                    placeholder="First Name"
                />
                <FormikInput 
                    name="lastName" 
                    placeholder="Last Name"
                />
                <FormikInput 
                    name="email" 
                    type="email" 
                    placeholder="Email"
                />
                <FormikInput 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                />
                <FormikInput 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Repeat Your Password"
                />
                <Button type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
                <StyledLink to={LOGIN_PATH}>
                    Sign In
                </StyledLink>
            </StyledForm>
            )}
        </Formik>
    </div>
  )
};

const StyledForm = styled(Form)`
    max-width: ${screenSize.mobile};
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Title = styled.p`
    font-size: 24px;
    text-align: center;
    margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
    text-align: center;
    margin-top: 8px
    font-size: 18px;
`;

export default Register