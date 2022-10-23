import { useContext } from 'react'
import AuthContext from '../Store/AuthProvider/AuthProvider'

export const useAuth = () => {
  return useContext(AuthContext)
}
