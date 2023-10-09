import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Counter from '@/components/counter'
import LocaleSwitcher from '@/components/localeSwitcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <LocaleSwitcher dictionary={dictionary.languages} lang={lang}/>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{' '}
        {dictionary.server_component.welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  )
}
