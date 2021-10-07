import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import data from '../../constants/data'
import {Link} from "react-router-dom"
const styles = makeStyles({
    btn:{
        margin:10,
        width:"80%"

    },
    table:{
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})

function Catergory() {
    const classes = styles()
    return (
        <>
        <Link to="/create" style={{textDecoration:"none", color:"inherit"}}>
          <Button variant="contained" color="primary" className={classes.btn}>Create Blog</Button>
        </Link>

          <Table className={classes.table}>
              <TableHead>
                  <TableCell>
                      <Link to={'/'} className={classes.link}> 
                            All Categories
                       </Link>
                  </TableCell>
              </TableHead>

              <TableBody>
                  {
                      data.map(data => (
                        <TableRow>
                            <TableCell>
                                <Link to={`/?category${data}`} className={classes.link}>
                                    {data}
                                </Link>
                            </TableCell>
                        </TableRow>
                      ))
                  }
              </TableBody>
          </Table>
        </>
    )
}

export default Catergory
