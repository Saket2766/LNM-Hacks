import '@/styles/globals.css'
import { DiscordProvider } from '@/context/context'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {
  return(
    <DiscordProvider>
      <Component {...pageProps} />
    </DiscordProvider>
  ) 
}
