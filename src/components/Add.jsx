import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <Box
      sx={{
        width: 400,
        margin: '50px auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom color='primary'>
        ADD BLOG
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="Blog Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Author Name"
          variant="outlined"
          fullWidth
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ padding: 1 }}
        >
          SUBMIT BLOG
        </Button>
      </Box>
    </Box>
    </div>
  )
}

export default Add
