//import styles from '../styles/components/ConfigButton.module.css';
import React, { useContext, useState } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import { ButtonConfigNotSelected, ButtonConfigIsSelected, Dropdown } from '../styles/components/ConfigButton.moduleCss';
import ClickAwayListener from 'react-click-away-listener';


interface ConfigButtonProps {
    toggleTheme(): void;
}

export function ConfigButton({ toggleTheme }: ConfigButtonProps) {
    const [open, setOpen] = useState(false);
    const toggleButton = () => setOpen(!open);
    const { colors, title } = useContext(ThemeContext);
    const handleClickAway = () => setOpen(false);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <header>
                {open ? <ButtonConfigIsSelected onClick={toggleButton} />
                    : <ButtonConfigNotSelected onClick={toggleButton} />}
                {open && (
                    <>
                        <Dropdown>
                            <ul>
                                <li>
                                    <p><strong>TEMA DARK :</strong></p>
                                    <Switch
                                        onChange={toggleTheme}
                                        checked={title === 'dark'}
                                        checkedIcon={false}
                                        uncheckedIcon={false}
                                        height={24}
                                        width={36}
                                        onColor={colors.colorBlue}
                                        offColor={colors.text}
                                    />
                                </li>
                            </ul>
                        </Dropdown>
                    </>
                )}
            </header>
        </ClickAwayListener>
    );
}