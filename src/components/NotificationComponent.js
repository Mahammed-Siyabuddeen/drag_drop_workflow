import React from 'react'
import { useSelector } from 'react-redux'

const NotificationComponent = () => {
  const { isError, errorMessage } = useSelector(state => state.error)

  if (isError)
    return (
      <p className={` animate-pulse absolute py-4 px-2 top-20 right-8 rounded-md text-white right-2 bg-red-500 `}>
        {errorMessage}
      </p>
    )

  return (
    <p className={` animate-pulse absolute py-4 px-2 top-20 right-8 rounded-md text-white bg-green-500 `}>
      successfully Created
    </p>
  )
}

export default NotificationComponent