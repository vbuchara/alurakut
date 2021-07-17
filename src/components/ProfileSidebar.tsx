import { shade } from 'polished';
import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { ThemeContext as ChangeThemeContext } from '../contexts/ThemeContext';
import { AlurakutProfileSidebarMenuDefault } from '../lib/AlurakutCommons';
import { Box } from '../styles/home';

type ProfileSidebarProps = {
  user: string;
};

export function ProfileSidebar({ user }: ProfileSidebarProps){
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ChangeThemeContext);

  return (
    <Box as="aside">
      <img src={`https://github.com/${user}.png`}/>
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${user}`}>
          @{user}
        </a>
      </p>
      <hr/>

      <AlurakutProfileSidebarMenuDefault />

      <div className="themeToggle">
        <p>Mudar Tema</p>
        <Switch 
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={25}
          width={45}
          handleDiameter={30}
          onColor={colors.button}
          onHandleColor={shade(0.1, '#FFFFFF')}
          offColor={colors.button}
          offHandleColor={shade(0.1, '#FFFFFF')}
          activeBoxShadow={'none'}
        />
      </div>
    </Box>
  );
}