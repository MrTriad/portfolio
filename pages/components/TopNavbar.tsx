import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from 'pages/hooks/useDarkMode';

const TopNavbar = () => {
  return (
    <div className='top-navigation'>
      <div className='flex intems-center'>
        <NavbarButton title={'Home'} link={'#Home'} />
        <NavbarButton title={'Bio'} link={'#Bio'}/>
        <NavbarButton title={'Projects'} link={'#Projects'}/>
        <NavbarButton title={'Blog'} link={'#'}/>
        <NavbarButton title={'Contacts'} link={'#Home'} />
      </div>
      <div>
        <ThemeIcon />
      </div>
    </div>
  );
};

const NavbarButton = (props: { title: string, link: string }) => {
  return (
    <a type="button" href={props.link} className="top-navigation-button top-navigation-colors">
      {props.title}
      </a>
  )
}


const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='40' className='top-navigation-icon top-navigation-colors' />
      ) : (
        <FaMoon size='40' className='top-navigation-icon top-navigation-colors' />
      )}
    </span>
  );
};

export default TopNavbar