import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, usePage } from '@inertiajs/react';

const languages = [
  {
    value: 'en',
    label: 'English',
    flag: '/assets/icons/english.png',
  },
  {
    value: 'kh',
    label: 'Khmer',
    flag: '/assets/icons/khmer.png',

  },
];

export function MyLanguage() {
  const { locale } = usePage().props;
  const [value, setValue] = useState(locale || 'en');
  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Link key={lang.value} href={`/lang/${lang.value}`}>
          <button
            variant="outline"
            size="icon"
            onClick={() => setValue(lang.value)}
            className={`border-2 transition-all ${
              value === lang.value
                ? 'border-primary-two'
                : 'border-transparent '
            } hover:border-yellow-300`}
          >
            <img
              src={lang.flag}
              alt={lang.label}
              className="aspect-square w-6 object-contain lg:w-7 false"
            />
          </button>
        </Link>
        
      ))}
    </div>
  );
}
