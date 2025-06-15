import { IconButton, Modal, Paper, Stack } from "@mui/material"
import type { ReactNode } from "react";
import Text from "../ComponentText";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
// import CloseIcon from '@mui/icons-material/Close';
import './style.scss'

interface ModalCenterProps {
    children: ReactNode;
    open: boolean;
    handleClose: () => void;
    title: string;
    className?: string;
    onSubmit : () => void;
    onDelete : () => void;
    disable : boolean;
    isEdit: boolean;
}
function ModalCenter({ open, handleClose, children, title, className="",onSubmit, onDelete,disable, isEdit }: ModalCenterProps) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={`modalCenter ${className}`}  
        >
            <Paper elevation={8} className="modalCenterBox">
                <Stack className="modalHeader">
                    <Text
                        text={title}
                        variant="h5"
                    />
                    <Stack className="actionBtns">
                        {
                            isEdit &&
                            <IconButton onClick={onDelete} disabled={disable}>
                                <DeleteIcon color="error" />
                            </IconButton>
                        }
                        <IconButton onClick={onSubmit} disabled={disable}>
                            <DoneIcon color="success"/>
                        </IconButton>
                    </Stack>
                </Stack>
                <Stack className="modalContent">
                    {children}
                </Stack>
            </Paper>
        </Modal>
    )
}

export default ModalCenter