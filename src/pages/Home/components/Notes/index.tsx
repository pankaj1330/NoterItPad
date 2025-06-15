import { Button, Stack, TextareaAutosize, TextField } from "@mui/material"
import Note from "../Note"
import useModalState from "../../../../hooks/useModalState"
import ModalCenter from "../../../../components/Modal";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import Text from "../../../../components/ComponentText";
import { useCreateNoteMutation, useDeleteNoteMutation, useGetNotesQuery, useUpdateNoteMutation } from "../../redux/redux";
import { showErrorToast, showSuccessToast } from "../../../../utils/showtoast";
import { toast } from "react-toastify";
import CircularIndeterminate from "../../../../components/CircularProgress";

function Notes() {

  const {data: NotesData, isLoading} = useGetNotesQuery();

  const [createNewNote, {isLoading: isNoteCreating}] = useCreateNoteMutation();

  const [updateNote, {isLoading: isNoteUpdating}] = useUpdateNoteMutation();

  const [deleteNote, {isLoading: isNoteDeleting}] = useDeleteNoteMutation();

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

  const handleOpenModal = (note) => {
    setEditNote({
      title : note?.title,
      desc : note?.description
    })
    openModal(note?.id);
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
    setIsEdit(false);
    closeModal();
  }

  const handleCreateNote = async () => {
    if(!isEdit){
      try{
        const resp = await createNewNote({
          title : editNote.title,
          description : editNote.desc
        })
        const isSuccess = showSuccessToast(resp);
        if(isSuccess){
          handleCloseModal();
        }
      }
      catch(err){
        showErrorToast(err);
      }
    }

    else{
      try{
        const resp = await updateNote({
          id : modalData,
          title: editNote.title,
          description: editNote.desc
        })
        const isSuccess = showSuccessToast(resp);
        if(isSuccess){
          handleCloseModal();
        }
      }
      catch(err){
        showErrorToast(err);
      }
    }

    return;
  }

  const handleDeleteNote = async () => {
    if(modalData){
      try{
        const resp = await deleteNote({id : modalData});
        const isSuccess = showSuccessToast(resp);
        if(isSuccess){
          handleCloseModal();
        }
      }
      catch(err){
        showErrorToast(err);
      }
    }
    else{
      toast.error("Select a note");
      handleCloseModal();
    }
    return;
  }

  if(isLoading){
    return <Stack display={"flex"} justifyContent={'center'} alignItems={'center'} height={'80vh'}>
      <CircularIndeterminate />
    </Stack>
  }

  return (
    <Stack className="notes-app">
      {
        (NotesData?.notes && NotesData?.notes?.length === 0) ?
        <Stack className="notes-app">
          <Stack className="empty-notes">
            <Button className="create-note-btn" variant="outlined" onClick={createNote}>Let's Create a Note ✍️</Button>
          </Stack>
        </Stack> : 
        <>
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
              {
                NotesData?.notes?.map(note => {
                  return <Note
                    title={note?.title}
                    desc={note?.description}
                    id={note?.id}
                    handleClick={() => handleOpenModal(note)}
                  />
                })
              }
            </Stack>
          </Stack>
        </>
      }


      <ModalCenter 
        open={isModalOpen} 
        handleClose={handleCloseModal} 
        title={isEdit ? "Edit Note" : "Create Note"} 
        onSubmit={handleCreateNote}
        onDelete={handleDeleteNote}
        disable={isNoteCreating || isNoteUpdating || isNoteDeleting}
        isEdit={isEdit}
        className="editModal"
      >
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