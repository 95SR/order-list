import React from 'react'
import { useState, useEffect } from 'react';

export default function useReactPath(){
    const [path, setPath] = React.useState(window.location.pathname);
    const listenToPopstate = () => {
      const winPath = window.location.pathname;
      setPath(winPath);
      console.log(path)
    };
    React.useEffect(() => {
      window.addEventListener("popstate", listenToPopstate);
      
      return () => {
        window.removeEventListener("popstate", listenToPopstate);
      };
      
    }, []);
    return path;
  };