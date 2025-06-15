import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import FormWrapper from "../../../components/FormWrapper"
import Text from "../../../components/ComponentText"
import InputText from "../../../components/InputText"
import { LoginSchema } from "./utils/validation"
import type { z } from "zod"
import { Link, useNavigate } from "react-router-dom"
import { showErrorToast, showSuccessToast } from "../../../utils/showtoast"
import { useLoginUserMutation } from "../redux/redux"
import { RouteConstants } from "../../../routes/RouteConstants"

type LoginFormType = z.infer<typeof LoginSchema>

function Login() {

  const [loginUser, {isLoading}] = useLoginUserMutation();

  const navigate = useNavigate();

  const formMethod = useForm<LoginFormType>({
    defaultValues : {
      email : "",
      password : "",
    },
    resolver : zodResolver(LoginSchema)
  })

  const handleSubmit = async (data : LoginFormType) => {
    try{
      const resp = await loginUser(data);
      const isSuccess = showSuccessToast(resp);
      if(!isSuccess){
        return;
      }
      formMethod.reset();
      const token = resp?.data?.access_token;
      const name = resp?.data?.username || "";
      localStorage.setItem('token', token);
      localStorage.setItem('username',name);
      navigate(RouteConstants.HomeRoutes.HOME_PAGE);
    }
    catch(err){
      showErrorToast(err);
    }
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

          <Button variant="contained" type="submit" loading={isLoading}>Login</Button>
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