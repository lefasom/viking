'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_card } from '../redux/dataAction'

function getdata() {

  const dispatch = useDispatch()

  const obtener_data = () => {
    dispatch(get_card())
  }

  useEffect(() => {
    obtener_data()
  }, [])

  return (
    <div>hola mundo</div>
  )
}

export default getdata