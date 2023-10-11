'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, i18n } from '@/i18n.config'
import Image from 'next/image'

export default function LocaleSwitcher({
  lang,
  dictionary
}: {
  lang: Locale
  dictionary: {
    en: string
    de: string
    cs: string
  }
}) {
  const [open, setOpen] = React.useState(false)

  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const getLangField = (l: string) => {
    switch (l) {
      case 'cs':
        return (
          <>
            <Image
              src={'/cs.png'}
              alt='cs'
              width={25}
              height={25}
              className='mr-2.5'
            />
            <span className='hidden sm:block'>{dictionary.cs}</span>
          </>
        )
      case 'en':
        return (
          <>
            <Image
              src={'/en.png'}
              alt='en'
              width={25}
              height={25}
              className='mr-2.5'
            />
            <span className='hidden sm:block'>{dictionary.en}</span>
          </>
        )
      case 'de':
        return (
          <>
            <Image
              src={'/de.png'}
              alt='de'
              width={25}
              height={25}
              className='mr-2.5'
            />
            <span className='hidden sm:block'>{dictionary.de}</span>
          </>
        )
      default:
        break
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[50px] sm:w-[140px] justify-start'
          type='button'
          aria-haspopup='dialog'
          aria-controls='radix-:R1llla:'
          data-state='closed'
          aria-label='Open Language Selector'
        >
          {getLangField(lang)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[50px] sm:w-[140px] border-none p-0'>
        <Command>
          <CommandGroup>
            {i18n.locales.map(locale => {
              if (locale !== lang) {
                return (
                  <Link key={locale} href={redirectedPathName(locale)}>
                    <CommandItem
                      onSelect={() => setOpen(false)}
                      className='flex cursor-pointer justify-start'
                    >
                      {getLangField(locale)}
                    </CommandItem>
                  </Link>
                )
              }
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
