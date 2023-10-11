import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import { ModeToggle } from './ToggleMode'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>{navigation.links.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.links.about}</Link>
          </li>
        </ul>
        <div className='flex justify-center gap-2'>
          <ModeToggle />
          <LocaleSwitcher lang={lang} dictionary={navigation.languages} />
        </div>
      </nav>
    </header>
  )
}
