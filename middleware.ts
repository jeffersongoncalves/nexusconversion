import { withAuth } from "next-auth/middleware"

// @ts-ignore
export default withAuth({
    callbacks: {
        authorized: ({ token }) => token?.user
    }
})

export const config = { matcher: ["/"] }
