import { Button, Stack } from "@mui/material"
import Text from "../../components/ComponentText"
import './style.scss'

function HeaderLayout() {
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
                    text="Pankaj"
                    variant="body1"
                    fontWeight={500}
                />
                <Button>Logout 🏃‍♂️‍➡️</Button>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default HeaderLayout