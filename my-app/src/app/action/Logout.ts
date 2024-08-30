'use server'
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function handleLogout() {
    cookies().delete('Authorization')
    cookies().delete('id')
    revalidatePath('/','layout')
    redirect('/')
  }