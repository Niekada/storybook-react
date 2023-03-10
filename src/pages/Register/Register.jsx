import { Formik, Form, } from "formik"
import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import { screenSize } from "../../consts/mediaQueries"
import Button from "../../components/Button/Button"
import * as Yup from "yup";
import { LOGIN_PATH } from "../../routes/const";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUser } from "../../hooks/users";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string()
        .required("Please retype your password.")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

const Register = () => {
    const navigate = useNavigate()

    const { mutateAsync: createUser } = useCreateUser();

    const handleSubmit = (values) => {
        const { confirm_password, ...user } = values;


        createUser(user)
            .then(() => {
                navigate(LOGIN_PATH);
                toast.success("Successfully registered")
            })
            .catch((error) => {
                console.error("failed to create user: ", error);
                toast.error("Please try to register again");
            });
    };

  return (
    <div>
        <Formik
            initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                confirm_password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
            <StyledForm>
                <Title>Register Your Account</Title>
                <FormikInput 
                    name="first_name" 
                    placeholder="First Name"
                />
                <FormikInput 
                    name="last_name" 
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
                    name="confirm_password" 
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