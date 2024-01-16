'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const about: { title: string; href: string; description: string }[] = [
  {
    title: 'Me',
    href: '/about/me',
    description: 'Learn a bit more about me and what I do.',
  },
  {
    title: 'Projects',
    href: '/about/projects',
    description:
      'All the projects I have been developing throughout my journey.',
  },
]

const setup: { title: string; href: string; description: string }[] = [
  {
    title: 'Stack',
    href: '/setup/stack',
    description: 'The technologies I use as a developer.',
  },
  {
    title: 'Setup',
    href: '/setup',
    description: 'All the equipments I use in my daily life.',
  },
]

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base xs:text-lg">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="md:w-80 md:gap-2 p-2 lg:w-96 lg:gap-3 lg:p-4">
              {about.map((about) => (
                <ListItem
                  key={about.title}
                  title={about.title}
                  href={about.href}
                >
                  {about.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base xs:text-lg">
            Setup
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-full">
            <ul className="md:w-80 md:gap-2 p-2 lg:w-96 lg:gap-3 lg:p-4">
              {setup.map((setup) => (
                <ListItem
                  key={setup.title}
                  title={setup.title}
                  href={setup.href}
                >
                  {setup.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <Link href="/setup/stack" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="text-base xs:text-lg">Stack</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="text-base xs:text-lg">Contact</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={`/${ref}`}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
