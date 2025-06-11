import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignupValidation } from "./utils/validation";
import InputText from "../../../components/InputText";
import FormWrapper from "../../../components/FormWrapper";
import '../../../style/notesAuth.scss'
import Text from "../../../components/ComponentText";
import { Link } from "react-router-dom";

type signupSchemaType = z.infer<typeof SignupValidation>

function Signup() {

  const formMethod = useForm<signupSchemaType>({
    defaultValues : {
      username : "",
      email : "",
      password : ""
    },
    resolver : zodResolver(SignupValidation)
  });

  const handleSubmit = (data : signupSchemaType) => {
    console.log("data ",data);
    return;
  }

  return (
    <Stack className="signupPage">
      <FormWrapper onSubmit={handleSubmit} formMethod={formMethod} className="signupForm">
          <Text variant="h5" fontWeight={600} align="center" text="Sign Up" />
          <InputText name="username" label="Name"/>
          <InputText name="email" label="Email"/>
          <InputText name="password" label="Password"/>

          <Button variant="contained" type="submit">Signup</Button>

          <Stack className="signupFooter">
            <Text 
              text="Already have an account"
              variant="body2"
              align="left"
              color={'gray'}
              className="footertext"
            />
            <Link to={'/login'}>Login</Link>
          </Stack>
      </FormWrapper>
    </Stack>
  )
}

export default Signup;