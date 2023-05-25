import { useState } from 'react'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
  const [value, setValue] = useState('')
  const onChangeHandler = (value: string) => {
    setValue(value)
  }

  return (
      <div>

          <Input
              placeholder="Enter your name"
              value={value}
              onChange={onChangeHandler}/>
      </div>
  )
}

export default MainPage
