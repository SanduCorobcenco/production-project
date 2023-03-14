
import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

// Element for texting

export const BugButton = () => {
  const [error, setError] = useState(false)
  const throwErr = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (

      <Button
          onClick={throwErr}
          >

          throw Error
      </Button>

  )
}
