import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid  from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal, reset } from '../../redux/goals/goalSlice'; 
import { toast } from 'react-toastify';
 

const GoalForm = ({ open, handleClickOpen, handleClose }) => {

  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(state => state.goals)
  
  const [formData, setFormData] = useState({
    goal: '',
    status: '',
  })

  const { goal, status } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const _goal = {
      goal,
      status
    }
    console.log(_goal);
    dispatch(addGoal(_goal))
    handleClose()
    setFormData({goal: '', status: '',})
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess && message) {
      toast.success(message)
    }

    return () => { dispatch(reset())  }
    
  }, [isSuccess, isError, message ])


  return (
    <Dialog open={open} onClose={handleClose}  sx={{ p: 3 }}>
        <DialogTitle color="primary.dark" sx={{ fontWeight: 'bold' }}>New goal </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill all the required information.
          </DialogContentText>

          <Grid container>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                autoFocus
                margin="dense"
                id="outlined-multiline-flexible"
                label="Enter goal description"
                multiline
                maxRows={2}
                fullWidth
                sx={{ mb: 3}}
                name='goal'
                value={goal}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
            <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                required
                id="demo-simple-select"
                name="status"
                value={status}
                label="Status"
                onChange={handleChange}
                sx={{ mb: 3 }}
              >
                <MenuItem value={1}>To Do</MenuItem>
                <MenuItem value={2}>In Progress</MenuItem>
                <MenuItem value={3}>Complete</MenuItem>
              </Select>
            </FormControl>
          </Box>
            </Grid>
          </Grid>
          

          
          {/* <TextField
            id="outlined-multiline-flexible"
            label="Detailed instructions"
            multiline
            maxRows={2}
            fullWidth
          /> */}

          
        </DialogContent>
        <DialogActions sx={{ mx: 2 }}>
          <Button 
            onClick={handleClose} 
            color="inherit"
            sx={{ textTransform:'capitalize' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            sx={{ textTransform:'capitalize' }}
            disableElevation
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default GoalForm