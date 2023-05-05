import React, { useState } from 'react'
import axios from 'axios'
import { FileUploadStyle } from './Styles/FileUploadStyle.style'
const FileUploads = () => {
    const [fileValue, setFileValue] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file',fileValue)
        const uploaded = await axios.post('http://localhost:7000/addSongs',formData)
        console.log(uploaded);
    }
    const handleUpload = (e)=>{
        e.preventDefault();
        setFileValue(e.target.files[0])
    }
  return (
    <FileUploadStyle>
        <form action="">
            <input type="file" onChange={handleUpload}/>
            <br />
            <input type= 'submit' onClick={handleSubmit} value= 'Upload'/>
        </form>
    </FileUploadStyle>
  )
}

export default FileUploads
