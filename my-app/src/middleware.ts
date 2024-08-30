import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { UserType } from "./app/db/models/User";
import { verify } from "jsonwebtoken";
import { verifyToken } from "./helpers/jwt";

async function auth(request: NextRequest){
    try {
        const authCookie = cookies().get('Authorization')

        if(!authCookie){
            throw new Error('Invalid token')
        }

        const [type, token] = authCookie.value.split(' ')
        if (type !== 'Bearer'){
            throw new Error('Invalid token')
        }

        const result = await verifyToken<UserType>(token)
        console.log(result);
        

        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('x-user-id', result._id.toString())
        requestHeaders.set('x-user-name', result.name.toString())
        requestHeaders.set('x-user-email', result.email.toString())
        return requestHeaders


    } catch (error) {
        throw error
    }
}

export async function middleware(request: NextRequest) {
    try {
        const headers = await auth(request)

        return NextResponse.next({
            request: {
                headers: headers
            }
        })
    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json<{error: string}>({
                error: error.message
            },{
                status: 401
            })
        }

        return NextResponse.json<{error: string}>({
            error: "Internal server error"
        },{
            status: 500
        })
    }
}

export const config = {
    matcher: [
        '/api/wishlists',
        '/api/wishlists/:path*'
    ]
}