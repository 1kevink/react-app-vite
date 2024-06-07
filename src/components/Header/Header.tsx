import { useState } from 'react';
import Button from '../Button/Button';
import { Variants } from '../../constants/common';

const SECTIONS = [{ name: 'Аттестация' }, { name: 'Конструктор АП' }, { name: 'Личный кабинет' }];

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const onLogin = () => setIsLoading(!isLoading);

  return (
    <div className="header">
      <div className="sections">
        {SECTIONS.map((section) => (
          <div className="sections__item">{section.name}</div>
        ))}
        <Button text="Войти" variant={Variants.PRIMARY} onClick={onLogin} isLoading={isLoading} withIcon />
      </div>
    </div>
  );
}
