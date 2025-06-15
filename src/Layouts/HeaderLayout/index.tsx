import { Button, Stack } from "@mui/material"
import Text from "../../components/ComponentText"
import './style.scss'
import { useNavigate } from "react-router-dom"
import { RouteConstants } from "../../routes/RouteConstants";

function HeaderLayout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate(RouteConstants.LoginRoutes.LOGIN_PAGE);
    }

  return (
    <Stack className="header">
        <Stack className="header-left">
            <Text 
                text="LiteNote"
                variant="h5"
                className="logo"
                fontWeight={500}
            />
        </Stack>
        <Stack className="header-right">
            <Stack className="userName-logout">
                <Text 
                    text={localStorage.getItem('username') || ""}
                    variant="body1"
                    fontWeight={500}
                />
                <Button onClick={handleLogout} color="error">Logout 🏃‍♂️‍➡️</Button>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default HeaderLayout