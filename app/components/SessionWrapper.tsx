"use client"
import { SessionProvider } from "next-auth/react"


export const SessionWrapper = ({childern}: {childern: React.ReactNode}) => {
    return <SessionProvider>
        {childern}
    </SessionProvider>
}