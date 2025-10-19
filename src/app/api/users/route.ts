import { NextResponse } from 'next/server'

interface User {
    id: number,
    name: string,
    email: string
}

let users: User[] = [
    { id: 1, name: 'ilson', email: 'ilson@bol.com' },
    { id: 1, name: 'lane', email: 'lane@bol.com' },
    { id: 1, name: 'rita', email: 'rita@bol.com' },
]

export async function GET() {
    return NextResponse.json({
        msg: 'USERS',
        hora: new Date().toLocaleTimeString(),
        users: users
    })
}