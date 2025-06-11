import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import FormWrapper from "../../../components/FormWrapper"
import Text from "../../../components/ComponentText"
import InputText from "../../../components/InputText"
import { LoginSchema } from "./utils/validation"
import type { z } from "zod"
import { Link } from "react-router-dom"

type LoginFormType = z.infer<typeof LoginSchema>

function Login() {
  const formMethod = useForm<LoginFormType>({
    defaultValues : {
      email : "",
      password : "",
    },
    resolver : zodResolver(LoginSchema)
  })

  const handleSubmit = (data : LoginFormType) => {
    console.log("data ",data);
    return;    
  }

  return (
    <Stack className="signupPage">
        <FormWrapper formMethod={formMethod} onSubmit={handleSubmit} className="signupForm">
          <Text 
            text="Login"
            variant="h5"
            fontWeight={600}
            align="center"
          />

          <InputText 
            name="email"
            label="Email"
          />
          <InputText 
            name="password"
            label="Password"
          />

          <Button variant="contained" type="submit">Login</Button>
          <Stack className="signupFooter">
            <Text 
              text="Don't have an account"
              variant="body2"
              align="left"
              color={'gray'}
              className="footertext"
            />
            <Link to={'/signup'}>Sign Up</Link>
          </Stack>
        </FormWrapper>
    </Stack>
  )
}

export default Login