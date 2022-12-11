import React from "react"
import { Container } from "./Container"
import { MobileMultiMenu } from "./MobileMultiMenu"
import { Sidebar } from "./Sidebar"

export const DashboardContent = ({ children }) => {
  return (
    <Container>
      <div className="grid mx-2 grid-flow-row grid-cols-1 md:grid-rows-1 md:grid-cols-[16rem,1fr]">
        <MobileMultiMenu />
        <Sidebar />
        {children}
      </div>
    </Container>
  )
}
