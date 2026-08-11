interface HeaderProps{
  title?:string;
}

export default function Header ({title = "Flash Cards"} : HeaderProps) {
    return (
      <header className= 'mb-4'>
        <h1 className='text-2xl font-bold text-grayy-900'>{title}</h1>
      </header>
    );
}