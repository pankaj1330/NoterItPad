import { Paper, Stack } from "@mui/material"
import Text from "../../../../components/ComponentText"

interface NoteProps {
    title : string;
    desc : string;
    handleClick ?: (id : string) => void;
    id : string;
}

function Note({title, desc, id ,handleClick}: NoteProps) {
  return (
    <Paper elevation={3} sx={{borderRadius:"12px"}}>
        <Stack className="singleNote" onClick={() => handleClick ? handleClick(id) : {}}>
            <Stack className="card">
                <Text 
                    text={title}
                    variant="h5"
                />
                <Text 
                    text={desc?.length > 50 ? desc?.substring(0,50) + "..." : desc}
                    variant="body1"
                />
            </Stack>
        </Stack>
    </Paper>
  )
}

export default Note