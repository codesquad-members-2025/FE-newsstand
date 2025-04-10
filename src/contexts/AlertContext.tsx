import { createContext, useState, ReactNode } from 'react'

interface AlertContextType {
  showAlert: boolean
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>
  pressId: string
  setPressId: React.Dispatch<React.SetStateAction<string>>
}

const AlertContext = createContext<AlertContextType>({
  showAlert: false,
  setShowAlert: () => {},
  pressId: '',
  setPressId: () => {},
})

const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [showAlert, setShowAlert] = useState(false)
  const [pressId, setPressId] = useState('')

  return (
    <AlertContext.Provider value={{ showAlert, setShowAlert, pressId, setPressId }}>
      {children}
    </AlertContext.Provider>
  )
}

export { AlertContext }
export default AlertProvider
