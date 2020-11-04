import React from 'react'

export const AuthStateContext = React.createContext()

function AuthProvider({ children }) {
  const [dataUser, setDataUser] = React.useState({})

  function setDataUserFromDB(data) {

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