import React from 'react'

const NavbarContext = React.createContext({})

export const NavbarProvider = NavbarContext.Provider
export const NavbarConsumer = NavbarContext.Consumer
export default NavbarContext