import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import React from 'react'
import loader from '../../assests/Loader.svg'

// interface GlobalLoaderProps {
//   readonly isLoading: number
// }

const useStyles = makeStyles(() => ({
  loader_container: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: ' rgba(0,0,0,0.4)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    animation: 'rotation 1.5s infinite linear',
  },
}))

export const GlobalLoader = () => {
  const classes = useStyles()
  return (
    <>
      {/* {isLoading ? ( */}
      <Typography className={`${classes.loader_container}`} component="div">
        <img src={loader} alt={"loading"} className={`${classes.loader}`} />
      </Typography>
      {/* ) : (
        <></>
      )} */}
    </>
  )
}
