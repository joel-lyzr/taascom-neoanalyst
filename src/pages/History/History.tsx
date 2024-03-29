import { Button } from '@/components'

export const History = () => {
  return (
    <table className="w-full text-sm shadow-lg rounded-md text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {['Your Queries', 'Type', 'Date', 'Timestamp', ''].map((item) => (
            <th key={item} scope="col" className="px-6 py-4 bg-blue-100">
              <div className="flex items-center">
                {item}
                {item && (
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          {
            query: 'what is costliest car?',
            type: 'User Query',
            date: '11/8/2023',
            timestamp: '12:14:04 PM',
          },
          {
            query: 'Which is top car',
            type: 'User Query',
            date: '11/1/2023',
            timestamp: '3:39:19 PM',
          },
        ].map((row) => (
          <tr key={row.query} className="bg-white border-b">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {row.query}
            </td>
            <td className="px-6 py-4">{row.type}</td>
            <td className="px-6 py-4">{row.date}</td>
            <td className="px-6 py-4">{row.timestamp}</td>
            <td className="px-6 py-4 text-right">
              <Button variant="link">Go to this query</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
