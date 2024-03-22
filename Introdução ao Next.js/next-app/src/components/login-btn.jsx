import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  // Check if window is defined (client-side) before using useSession
  if (typeof window !== 'undefined') {
    const { data: session } = useSession()

    if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    } else {
      return (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )
    }
  }
}
