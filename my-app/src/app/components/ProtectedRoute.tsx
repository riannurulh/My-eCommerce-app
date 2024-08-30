import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import React from "react"
import Swal from "sweetalert2"

type Props = {
    children: React.ReactNode
}
export default function ProtectedRoute({children}: Props) {
    const authCookie = cookies().get('Authorization')
    if (!authCookie) {
        Swal.fire({
  
            icon: 'error',
            title: 'You have to login to access this page'
      
          })
        return redirect('/')
    }
    return children
}