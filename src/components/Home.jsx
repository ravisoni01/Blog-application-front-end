import React from 'react'
import Banner from './Home/Banner'
import Catergory from './Home/Catergory'
import Posts from './Home/Posts'


import {Grid} from "@material-ui/core"
function Home() {
    return (
        <>
           <Banner/>
           <Grid container>
               <Grid item lg={2} xs={12} sm={2}>
                    <Catergory/>
               </Grid>

               <Grid container item xs={12} sm={10} lg={10}>
                    <Posts/>
               </Grid>
           </Grid>
        </>
    )
}

export default Home
