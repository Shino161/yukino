import React, { createContext, useState } from 'react'
export const GlobalContext = createContext({
  globalData: {},
  setGlobalData: undefined,
})

export const GlobalProvider = (props: any) => {
  const [globalData, setGlobalData] = useState({})
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export const GlobalConsumer = GlobalContext.Consumer
