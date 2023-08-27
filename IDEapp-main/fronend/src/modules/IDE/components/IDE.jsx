import React, { useRef } from 'react'
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';
export const IDE = () => {
  const editorRef= useRef(null);
  const mount=(editor)=>{
editorRef.current=editor;
  }
    const getCode= async ()=>{
      const code= editorRef.current.getValue();
      console.log('Code is',code);
      const jsonObject= {"code":code};
      try{
      const response = await apiClient.post(,jsonObject);
      console.log('Response is', response);
      }
      catch(err){
        console.log('Error during code submission', err);
      }
    }
    const skeletonCode= `
    class Solution{ 
      public int show(int x, int y){
        return x+y;
      }
    }`;
  return (
    <>
    <Editor
        onMount = {mount}
        height="80vh"
        defaultLanguage="java"
        defaultValue={skeletonCode}
        
      />
      <Button onClick={getCode} variant="contained">Submit Code</Button>
      </>
  )
}
