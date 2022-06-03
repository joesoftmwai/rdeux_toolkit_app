import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { deepOrange, green, pink } from '@mui/material/colors';
import DashBreadcrumb from '../../components/dash_breadcrumb/DashBreadcrumb';
import CollectionsBookmark from '@mui/icons-material/CollectionsBookmark';
import Grid from '@mui/material/Grid';
import './dashboard.css'
import { Button, Card, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import GoalForm from '../../components/goal_form/GoalForm';
import Spinner from '../../components/spinner/Spinner';
import { toast } from 'react-toastify';
import { getGoals, reset } from '../../redux/goals/goalSlice';




const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { goals, isLoading, isError, message } = useSelector(state => state.goals)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const stringAvatar = (user) => {
    if (!user) return '';
    return user.user.name && `${  user.user.name.split(' ')[0][0]}`
  }

  useEffect(() => {
    if (!user) navigate('/signin')
    if  (isError) {
      toast.error(message);
    }

    dispatch(getGoals());

    return () => { dispatch(reset())  }
  }, [user, navigate, isError, message, dispatch]);

  if  (isLoading) {
    return <Spinner />
  }

  return (
    <div className='goals-dashboard'>
      <DashBreadcrumb/>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <h3 className='mb-2'>Goal setter app developmet</h3>
          <div className='d-flex justify-content-start'>
            <img src="https://cdn4.buysellads.net/uu/1/112766/1651848682-1651252301-Carbon_Network_Variation_2.png" className='intro-banner' alt="logo" />
            <p className='fs-14 '>With the help of a goal setter application we will be able to estimate tasks timelines, thus enhance milestone predictability</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={5}>

          <Grid container spacing={1}>
            <Grid item xs={6} sm={6}>
              <h6 className='mb-2'>Owner</h6>
              <div className='d-flex justify-content-start'>
                <Avatar sx={{ width: 45, height: 45, mr: 2, }} className='bg-primary' >
                  {stringAvatar(user)}
                </Avatar>
                <div>
                  <p className="fs-14 fw-bold mb-0">{user.user.name}</p>
                  <p className='fs-12'>Project Lead</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} sm={6}>
              <h6 className='mb-2'>Team</h6>
              <div className='d-flex justify-content-start'>
                <Tooltip title="Job" arrow>
                  <Avatar sx={{ width: 45, height: 45, mr: 2, bgcolor: pink[500] }} >
                    J
                  </Avatar>
                </Tooltip>
                <Tooltip title="Austine" arrow>
                  <Avatar sx={{ width: 45, height: 45, mr: 2, bgcolor: deepOrange[500] }} >
                    A
                  </Avatar>
                </Tooltip>
                <Tooltip title="Kelvin" arrow>
                  <Avatar sx={{ width: 45, height: 45, mr: 2, bgcolor: green[500] }} >
                    K
                  </Avatar>
                </Tooltip>
              </div>
            </Grid>
          </Grid>

          
        </Grid>

      </Grid>

      <Button 
        sx={{ borderRadius: '1.2rem', textTransform: 'capitalize', mt: 3, mb:1 }} 
        color="primary" 
        variant="contained" 
        disableElevation 
        startIcon={<AddIcon/>}
        onClick={handleClickOpen}>
          Add goal
      </Button>

      <GoalForm open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}  />


      <Grid container spacing={3}>
        

        <Grid item  xs={12} sm={4}>
          <Card variant='outlined' sx={{ textAlign: 'center', p: 2, borderRadius: '1rem', }}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/355/835/small_2x/Business__28766_29.jpg" className='task-icon' alt="task" />
            <p>Generating new app using Create-react-app</p>

            <Button sx={{ borderRadius: '1.2rem', textTransform: 'capitalize', my: 1, }} color="success" variant="outlined">Complete</Button>
          </Card>
        </Grid>

        <Grid item  xs={12} sm={4}>
          <Card variant='outlined' sx={{ textAlign: 'center', p: 2, borderRadius: '1rem', }}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/355/835/small_2x/Business__28766_29.jpg" className='task-icon' alt="task" />
            <p>Generating new app using Create-react-app</p>

            <Button sx={{ borderRadius: '1.2rem', textTransform: 'capitalize', my: 1, }} color="success" variant="outlined">Complete</Button>
          </Card>
        </Grid>

        <Grid item  xs={12} sm={4}>
          <Card variant='outlined' sx={{ textAlign: 'center', p: 2, borderRadius: '1rem', }}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/355/835/small_2x/Business__28766_29.jpg" className='task-icon' alt="task" />
            <p>Generating new app using Create-react-app</p>

            <Button sx={{ borderRadius: '1.2rem', textTransform: 'capitalize', my: 1, }} color="success" variant="outlined">Complete</Button>
          </Card>
        </Grid>

        <Grid item  xs={12} sm={4}>
          <Card variant='outlined' sx={{ textAlign: 'center', p: 2, borderRadius: '1rem', }}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/355/835/small_2x/Business__28766_29.jpg" className='task-icon' alt="task" />
            <p>Generating new app using Create-react-app</p>

            <Button sx={{ borderRadius: '1.2rem', textTransform: 'capitalize', my: 1, }} color="success" variant="outlined">Complete</Button>
          </Card>
        </Grid>

        <Grid item  xs={12} sm={4}>
          <Card variant='outlined' sx={{ textAlign: 'center', p: 2, borderRadius: '1rem', }}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/355/835/small_2x/Business__28766_29.jpg" className='task-icon' alt="task" />
            <p>Generating new app using Create-react-app</p>

            <Button sx={{ borderRadius: '1.2rem', textTransform: 'capitalize', my: 1, }} color="success" variant="outlined">Complete</Button>
          </Card>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Dashboard