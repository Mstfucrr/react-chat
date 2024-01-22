import { createContext, useContext, useMemo, useState } from 'react'

interface AuthContextProps {
  user: any
  login: () => void
  logout: () => void
  loading: boolean
}

export const defaultAuthContextValues: AuthContextProps = {
  user: undefined,
  login: () => {}, // login:
  logout: () => {}, // logout:
  loading: false
}

// provider
const AuthContext = createContext<AuthContextProps>(defaultAuthContextValues)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(undefined)
  const [loading, setLoading] = useState<boolean>(true)

  const login = () => {
    setUser({ name: 'bob' })
    setLoading(false)
  }

  const logout = () => {
    setUser(undefined)
    setLoading(false)
  }

  const values: AuthContextProps = useMemo(() => ({
    user,
    login,
    logout,
    loading
  }), [user, login, logout, loading]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
