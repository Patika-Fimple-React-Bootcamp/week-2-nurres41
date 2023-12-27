import React, { useState } from 'react'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import {useDispatch} from 'react-redux'
import { deletePost } from '../features/postSlice'
import axios from 'axios'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PostCard = ({ postData }) => {

    const dispatch = useDispatch()

      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false);  };
    
    const [modalData, setModalData] = useState()
    

    const removePost = (postId) => {
        dispatch(deletePost(postId))
    }

    const cardHandler = async (postId) => {
        try {
            await axios(
              `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
            )
                .then(res => setModalData(res?.data))
                
        } catch (error) {
            console.error(error)
        }
        handleOpen();
console.log(modalData);
    }

    return (
      <div
        onClick={() => cardHandler(postData.id)}
        style={{ cursor: "pointer" }}
      >
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              User: {postData.userId}
            </Typography>
            <Typography variant="h5" component="div">
              {postData.title}
            </Typography>
            <Typography variant="body2">{postData.body}</Typography>
            <CardActions>
              <Button
                onClick={() => removePost(postData.id)}
                size="small"
                color="error"
              >
                Delete
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        {modalData && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalData?.map((item) => (
                  <div>
                    <p>{item.email}</p>
                  </div>
                ))}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData?.map((item) => (
                  <div>
                    <p>{item.body}</p>
                  </div>
                ))}
              </Typography>
              <Button onClick={() => handleClose()}>Close Button</Button>
            </Box>
          </Modal>
        )}
      </div>
    );
}

export default PostCard
