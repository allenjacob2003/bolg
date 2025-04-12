import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const home = () => {
    var [user,setUser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log(response.data)
        setUser(response.data)
    })
  return (
        <div style={{marginTop:100}}>
            <Typography 
                variant="h4" 
                style={{ marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}
            >
                BLOG
            </Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>TITLE</TableCell>
                    <TableCell>BODY</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    user.map((val)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                                <TableCell>{val.body}</TableCell>
                            </TableRow>
                        )

                    })
                }
            </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default home
