import { createContext, useState, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
const Gun  = require('gun/gun')


export const DiscordContext = createContext()

const gun = Gun(['http://localhost:9000'])

const initialState = { messages: [] }

const reducer = (state, action) => {
  try {
    if (action.type == 'clear') return { messages: [] }
    if (action.type == 'add')
      return { messages: [...state.messages, action.data] }
  } catch (error) {
    console.error(error)
  }
}

export const DiscordProvider = ({ children }) => {
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [currentAccount, setCurrentAccount] = useState('')
  const [roomName, setRoomName] = useState('')
  const [placeholder, setPlaceholder] = useState('Message...')
  const [messageText, setMessageText] = useState('')
  const [currentUser, setCurrentUser] = useState()



  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  

  useEffect( () => {
    contextfix1()
  }, [currentAccount])

  useEffect(() => {
    setRoomName(router.query.name)
    dispatch({ type: 'clear', data: {} })
    setPlaceholder(`Message ${router.query.name}`)
    setMessageText('')
    getMessages()
  }, [router.query])

  async function contextfix1 () {
    if (!currentAccount) return

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getCurrentUserData?account=${currentAccount}`,
      )

      const data = await response.json()
      setCurrentUser(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getMessages = () => {
    const _name = router.query.name
    const _roomId = router.query.id
    const messagesRef = gun.get(_name)

    messagesRef.map().once(message => {
      dispatch({
        type: 'add',
        data: {
          sender: message.sender,
          content: message.content,
          avatar: message.avatar,
          createdAt: message.createdAt,
          messageId: message.messageId,
        },
      })
    })
  }

  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return

    try {
      const data = {
        userAddress: userAddress,
      }

      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      } catch (error) {
        console.error(error)
      }

      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createdm`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      } catch (error) {
        console.error(error)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) return
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DiscordContext.Provider
      value={{
        currentAccount,
        roomName,
        setRoomName,
        placeholder,
        messageText,
        setMessageText,
        state,
        gun,
        connectWallet,
        currentUser,
      }}
    >
      {children}
    </DiscordContext.Provider>
  )
}
