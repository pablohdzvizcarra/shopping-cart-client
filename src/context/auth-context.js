import React from 'react'

export const AuthStateContext = React.createContext()

function AuthProvider({ children }) {
  const [dataUser, setDataUser] = React.useState({
    isAuthenticated: false,
    data: {
      username: '',
      email: ''
    }
  })

  function setDataUserFromDB(data) {
    console.log(data)
    setDataUser({
      isAuthenticated: true,
      data: {
        username: data.username,
        email: data.email,
      }
    })
  }

  return (
    <AuthStateContext.Provider value={{
      dataUser,
      setDataUserFromDB
    }}>
        {children}
    </AuthStateContext.Provider>
  )
}

function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useArticlesContext must be used within a ArticlesProvider')
  }

  return context
}

export {
  AuthProvider,
  useAuthState,
}