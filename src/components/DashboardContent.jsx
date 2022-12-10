import React from "react"
import { Container } from "./Container"
import { Sidebar } from "./Sidebar"

export const DashboardContent = ({ children }) => {
  return (
    <Container>
      <div className="grid mx-2 grid-cols-1 md:grid-cols-[16rem,1fr]">
        <Sidebar />
        {children}
      </div>
    </Container>
  )
}
