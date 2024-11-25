"use client"
import React from 'react'
import './style.css'
import { CircularProgress } from '@mui/material';

export default function Loading() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            const newProgress = prevProgress + 5;
            if (newProgress >= 94) {
              clearInterval(interval);
            }
            return newProgress;
          });
        }, 200); 
        return () => clearInterval(interval);
      }, []);
    return <CircularProgress animated now={progress}/>;
  }