import axios from 'axios'
import React, { useState } from 'react'
import { ContactDataType } from '../interface/interface'

export const useApi = () => {
    const [data, setData]= useState<ContactDataType[]>()
    const [error, setError]= useState<boolean>(false)
    const [loading, setLoading]= useState<boolean>(false)

    const fetchContact = async () => {
        setLoading(true)
        try {
            const response = await axios ({
                method:'GET',
                url: process.env.REACT_APP_BASE_URL
            })
            
            setTimeout(() => {
                setData(response.data)
                setLoading(false)

            }, 7000)
            
        }

        catch(error) {
            setError(true)
            setLoading(false)

        }
    }


  return {data, loading, error, fetchContact}
}


