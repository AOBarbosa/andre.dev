'use client'

import { Code2 } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { TypingWritter } from '@/components/TypingWritter'

export default function Home() {
  return (
    <div className="w-full h-full px-40 flex-col items-center justify-center">
      <nav className="bg-red-400 w-full flex flex-row justify-between">
        <Code2 />

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  <li>Me</li>
                  <li>Projects</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="bg-[#080713] flex justify-center items-center h-screen w-full text-2xl">
        <h1 className="font-bold">
          <TypingWritter content="Hello, i'm" showCursor />

          <span className="text-3xl text-purple-600">
            <TypingWritter content="André Barbosa" delay={1300} showCursor />
          </span>

          <TypingWritter content="a Front-end Developer" delay={2800} />
        </h1>
      </div>
    </div>
  )
}
