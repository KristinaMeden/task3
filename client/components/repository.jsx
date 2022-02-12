import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { decode } from 'js-base64';

const Repository = (props) => {

    const { userName, repositoryName } = useParams()
    const [readme, setReadme] = useState(null)
    const [error, setError] = useState(null)

    useEffect(async () => {
        props.onChange(repositoryName)

        try{
            const readFile = await axios(`https://api.github.com/repos/${userName}/${repositoryName}/contents/README.md`)
            if(readFile.data) {
                const base64ToString = decode(readFile.data.content)           
                setReadme(base64ToString)
            }
        } catch(err) {
            setError(err.message)
        } 
        
    }, [repositoryName])

    if(error) {
        return (  
            <div>
                <p className='text-red'>{error}</p>
            </div>
        ) 
    }

    return (
    <div className='p-8 bg-gray-300 flex flex-col'>
        {readme}
    </div>
    )
}

Repository.propTypes = {}

export default Repository