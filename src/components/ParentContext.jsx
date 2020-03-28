import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function ParentContext() {
  return (
    <div>
      <UserContext.Provider value={'Alex'}>
        <ChannelContext.Provider value={'Flatiron'}>
        <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default ParentContext
