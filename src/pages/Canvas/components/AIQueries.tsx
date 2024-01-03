import React from 'react'
import { BoltIcon } from '@heroicons/react/20/solid'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'

type IAiQueries = {
  onQuery: (message: string) => () => void
}

export const AiQueries: React.FC<IAiQueries> = ({ onQuery }) => {
  const aiQueries = [
    { query: 'what is the most used car ?' },
    { query: 'Explain quantum computing in simple terms' },
    { query: 'Give me suggestions for 10 creative names' },
  ]

  return (
    <div className="space-y-2 h-[90%] overflow-y-auto no-scrollbar">
      {aiQueries?.length === 0 && (
        <div className="border-2 border-dashed h-full flex flex-col justify-center items-center text-slate-500">
          <ArchiveBoxXMarkIcon className="w-5 h-5" />
          Hover to bookmark a message
        </div>
      )}
      {aiQueries.map((item) => (
        <div
          key={item.query}
          onClick={onQuery(item.query)}
          className="flex flex-col p-2 rounded-md text-md shadow-sm bg-blue-100 cursor-pointer"
        >
          <div className="flex items-center font-medium">
            <BoltIcon className={'mr-2 w-5 h-5 fill-yellow-600'} />
            {item.query}
          </div>
          <p className="py-2 text-sm text-slate-600">{item.query}</p>
        </div>
      ))}
    </div>
  )
}
