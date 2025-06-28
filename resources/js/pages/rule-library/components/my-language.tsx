import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
  const [value, setValue] = useState('en');

  return (
    <div className="flex gap-3">
      {languages.map((lang) => (
        <Button
          key={lang.value}
          variant="outline"
          size={'icon'}
          onClick={() => setValue(lang.value)}
          className={`p-[2px] border-2 bg-transparent transition-all ${
            value === lang.value
              ? 'border-primary-two'
              : 'border-transparent'
          } hover:border-yellow-300`}
        >
          <img
            src={lang.flag}
            alt={lang.label}
            className="h-full w-full rounded-full object-cover border border-white"
          />
        </Button>
      ))}
    </div>
  );
}
