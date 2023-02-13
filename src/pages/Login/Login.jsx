import { Formik, Form, } from "formik"
import FormikInput from "../../components/Button/FormikInput";
import styled from "styled-components";
import { screenSize } from "../../consts/mediaQueries"
import Button from "../../components/Button/Button"
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { CHECKOUT_PATH, REGISTER_PATH } from "../../routes/const"
import { useContext } from "react";
import { loginUser } from "../../api/users";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required")
});

const Login = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        loginUser(values)
            .then((response) => {
                setUser(response);
                navigate(CHECKOUT_PATH)
            })
            .catch((error) => {
                console.log("Failed to login:", error);
            });
    };

  return (
    <div>
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={validationSchema}

            // validate={(values) => {
            //     const errors = {};

            //     if(!values.email) {
            //         errors.email = "Required"
            //     }

            //     if(!values.password) {
            //         errors.password = "Required"
            //     }

            //     console.log(errors);
            //     return errors;
            // }}

            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
            <StyledForm>
                <Title>Login</Title>
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
                <Button type="submit" disabled={isSubmitting}>
                    Login
                </Button>
                <StyledLink to={REGISTER_PATH}>
                    Sign Up
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

export default Login