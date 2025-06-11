import { Button, Stack, TextareaAutosize, TextField } from "@mui/material"
import Note from "../Note"
import useModalState from "../../../../hooks/useModalState"
import ModalCenter from "../../../../components/Modal";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import Text from "../../../../components/ComponentText";

function Notes() {

  const {
    modalData,
    isModalOpen,
    closeModal,
    openModal
  } = useModalState();

  const [editNote, setEditNote] = useState({
    title: "",
    desc: "",
  })

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleOpenModal = (id: string) => {
    openModal(id);
    setIsEdit(true);
  }

  const createNote = () => {
    openModal(null);
    setIsEdit(false);
  }

  const handleCloseModal = () => {
    setEditNote({
      title: "",
      desc: ""
    })
    closeModal();
  }

  return (
    <Stack className="notes-app">
      {/* <Stack className="empty-notes">
        <Button className="create-note-btn" variant="outlined">Let's Create a Note ✍️</Button>
      </Stack> */}

      <Stack className="createNoteButton">
        <Text
          text="Create Note"
          variant="h6"
        />
        <Button className="singleNote createNote" onClick={createNote}>
          <AddIcon />
        </Button>

      </Stack>


      <Stack className="notes-list-container">
        <Text
          text="Notes"
          variant="h6"
        />
        <Stack className="notes-list">
            <Note
              title="Note 72"
              desc="A pen and paper can not decide your future !!"
              id={"1"}
              handleClick={handleOpenModal}
            />
            <Note
              title="Note 72"
              desc="A pen and paper can not decide your future !! pen and paper can not decide your future!"
              id={"2"}
              handleClick={handleOpenModal}
            />
        </Stack>
      </Stack>

      <ModalCenter open={isModalOpen} handleClose={handleCloseModal} title={isEdit ? "Edit Note" : "Create Note"} className="editModal">
        <Stack className="editNoteModal">
          <TextField
            placeholder="Title"
            name="title"
            value={editNote.title}
            onChange={(e) => setEditNote(prev => ({ ...prev, title: e.target.value }))}
          />
          <TextareaAutosize
            minRows={5}
            maxRows={10}
            name="desc"
            placeholder="Description"
            value={editNote.desc}
            onChange={(e) => setEditNote(prev => ({ ...prev, desc: e.target.value }))}
            style={{
              // outline:"none",
              marginTop: "8px",
              padding: "12px",
              fontFamily: "sans-serif",
              fontSize: "16px",
              borderRadius: "4px",
              outlineColor: "#1976d2",
            }}
          />
        </Stack>
      </ModalCenter>
    </Stack>
  )
}

export default Notes