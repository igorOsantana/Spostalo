//import styles from '../styles/components/ConfigButton.module.css';
import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import {
  ButtonConfigNotSelected,
  ButtonConfigIsSelected,
  Dropdown,
  Title,
} from './styles';
import ClickAwayListener from 'react-click-away-listener';
import { removeToken } from '../../services/auth';
import { useRouter } from 'next/router';

interface ConfigButtonProps {
  toggleTheme(): void;
}

export function ConfigButton({ toggleTheme }: ConfigButtonProps) {
  const [open, setOpen] = useState(false);
  const { colors, title } = useContext(ThemeContext);
  const route = useRouter();

  const toggleButton = () => setOpen(prevState => !prevState);

  const handleClickAway = () => setOpen(false);

  const handleLogOut = () => {
    removeToken();
    route.push('/sign');
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        {open ? (
          <ButtonConfigIsSelected onClick={toggleButton} />
        ) : (
          <ButtonConfigNotSelected onClick={toggleButton} />
        )}
        {open && (
          <Dropdown>
            <Title>Configurações</Title>
            <ul>
              <li>
                <label htmlFor='switch-theme'>Tema dark</label>
                <Switch
                  onChange={toggleTheme}
                  checked={title === 'dark'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={24}
                  width={36}
                  onColor={colors.colorBlue}
                  offColor={colors.text}
                  id='switch-theme'
                />
              </li>
              <li onClick={handleLogOut}>Sair</li>
            </ul>
          </Dropdown>
        )}
      </div>
    </ClickAwayListener>
  );
}
