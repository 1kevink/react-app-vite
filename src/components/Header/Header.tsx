import Button from '../Button/Button';

const SECTIONS = [{ name: 'section1' }, { name: 'section2' }];

export default function Header() {
  return (
    <div className="header">
      <div className="sections">
        {SECTIONS.map((section) => (
          <div className="sections__item">{section.name}</div>
        ))}
        <Button text='Войти'/>
      </div>
    </div>
  );
}
