import { Outlet } from 'react-router-dom'

import { Sider } from '@/components/Sider'
import { AnimatedPage } from '@/components/AnimatedPage'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { Button } from '.'

export const AppSkeleton = () => {
  return (
    <div className="h-screen w-screen sm:h-3/5 bg-white dark:bg-slate-800">
      <div className="mx-auto h-full">
        <div className="flex">
          <Sider />
          <div className="w-full p-4 space-y-2 bg-slate-100">
            <div className="w-full bg-white px-4 py-2 rounded-md shadow-lg flex justify-between items-center">
              <p className="text-slate-800 dark:text-slate-200 font-bold text-md">
                Taascom Bot
              </p>
              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  startIcon={
                    <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
                  }
                >
                  Logout
                </Button>
              </div>
            </div>
            <AnimatedPage>
              <Outlet />
            </AnimatedPage>
          </div>
        </div>
      </div>
    </div>
  )
}
