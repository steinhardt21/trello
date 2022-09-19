import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ModalCreateBoard = ({show, onHide, boards, addBoard}) => {
  const [titleNewBoard, setTitle] = useState(null)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleCreate = () => {
    addBoard(titleNewBoard)
    onHide()
  }

  return (
    <div>
      <Button variant="outlined">
        Open form dialog
      </Button>
      <Dialog open={show} onClose={onHide}>
        <DialogTitle>Add new board</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title of the new board"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onHide}>Cancel</Button>
          <Button onClick={() => handleCreate()}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

PropTypes.ModalCreateBoard = {
  onHide: PropTypes.func,
  boards: PropTypes.object,
  addBoard: PropTypes.func,
  show: PropTypes.bool
}

export default ModalCreateBoard
