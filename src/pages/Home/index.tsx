import { Stack } from "@mui/material"
import HeaderLayout from "../../Layouts/HeaderLayout"
import Notes from "./components/Notes"
import '../../style/home.scss'

function Home() {
  return (
    <Stack>
      <HeaderLayout />
      <Notes />
    </Stack>
  )
}

export default Home