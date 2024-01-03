import { AiQueries } from './components/AIQueries'
import { Button, Input, LoadingProfile } from '@/components'
import { IMessage, UserType } from '@/utils/types'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useState, useRef, useEffect } from 'react'
import ReactTimeAgo from 'react-time-ago'

export const Canvas = () => {
  const [chats, setChats] = useState<IMessage[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const chatRef = useRef<HTMLDivElement>(null)

  const bot = {
    id: '032d2e68-cecc-4041-9863-1f533e6cf5b4',
    created_at: '2023-12-30T16:19:40.044337+00:00',
    name: 'Taascom Bot',
    knowledge_id: 'Db_b6a90314f1c54f6a90bbd99faa28bca1',
    user: '18ab37ab-07ba-4d88-ac08-b6c40d694bcb',
    type: 'CHAT',
    welcome_message: 'Hi there, get started by sending your query.',
    model: 'gpt-3.5-turbo-16k',
    temperature: 0.4,
    top_p: 0.4,
    company_slug: null,
    left_color: '#555555',
    right_color: '#DBCC95',
    logo: 'data:image/jpeg;base64,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',
  }

  const scrollToBottom = () =>
    chatRef?.current?.scrollIntoView({ behavior: 'smooth' })

  const appendMessage = (role: string = UserType.user, msg: string) => {
    setChats([...chats, { role, content: msg }])
    scrollToBottom()
  }

  const onSend = (message: string) => () => {
    setLoading(true)
    scrollToBottom()
    console.log('use message to call api', message)
    setLoading(false)
  }

  useEffect(() => {
    appendMessage(UserType.assistant, 'Hello, how can I assist you today?')

    return () => {
      // Empty the chat before leaving
    }
  }, [])
  return (
    <div className="flex h-[54rem] w-full space-x-4">
      <div className="flex flex-col bg-white dark:bg-slate-800 h-full w-full rounded-md p-3 drop-shadow-xl">
        <div className="flex w-full justify-end">
          <Button variant="ghost" startIcon={<TrashIcon className="w-4 h-4" />}>
            Clear Chat
          </Button>
        </div>
        <div className="overflow-y-auto scroll-smooth no-scrollbar">
          {bot?.name &&
            chats.map((conv, idx: number) => {
              return (
                <div key={idx} className="group flex my-4 items-center">
                  <div className="mr-2 flex-shrink-0 w-10 h-10 flex justify-center items-center">
                    {conv.role !== 'user' ? (
                      <div
                        className="border border-slate-200 rounded-full"
                        style={{
                          backgroundImage: `url("${bot?.logo}")`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '35px auto',
                          overflow: 'hidden',
                          width: 40,
                          height: 40,
                        }}
                      />
                    ) : (
                      <UserCircleIcon className="dark:text-slate-300" />
                    )}
                  </div>
                  <div className="" style={{ animationDelay: `0.${idx}s` }}>
                    <span className="flex items-center">
                      <h4 className="text-sm font-bold text-gray-600 dark:text-slate-200">
                        {conv.role !== 'user' ? bot?.name : 'You'}
                      </h4>
                      <p className="text-xs font-regular text-gray-500 dark:text-slate-400 ml-2">
                        <ReactTimeAgo date={new Date()} />
                      </p>
                    </span>
                    <p className="mt-1 text-sm p-2 max-w-xl bg-slate-100 text-slate-800 rounded-lg dark:bg-slate-300 dark:text-slate-700">
                      {conv.content}
                    </p>
                  </div>
                </div>
              )
            })}
          {loading && <LoadingProfile name={bot?.name} />}
          <div ref={chatRef} style={{ float: 'left', clear: 'both' }}></div>
        </div>
      </div>
      <div className="flex flex-col w-2/5 p-4 space-y-4 rounded-md bg-white dark:bg-slate-800 shadow-xl">
        <Input placeholder="Search by query" className="w-full" />
        <AiQueries onQuery={onSend} />
      </div>
    </div>
  )
}
