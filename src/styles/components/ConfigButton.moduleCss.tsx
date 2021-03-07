import styled from 'styled-components';

export const ButtonConfigNotSelected = styled.button`
    height: 2rem;
    width: 2rem;
  
    border: ${props => props.theme.colors.background} solid 1px;
    border-radius: 50%;
    outline: none;
  
    background: ${props => props.theme.colors.background};
    background-image: url("/icons/config.png");
    background-repeat: no-repeat;
    background-size: 1.3rem;
    background-position: center;
  
    padding: 1rem;
    margin: 0 0 3rem 1rem;
  
    transition: all 0.4s;

    &:hover{
        filter: invert(20%);
    }

    &::active{
        border: var(--gray-line) solid 1px;
        opacity: 0.4;
    }
`
export const ButtonConfigIsSelected = styled.button`
    height: 2rem;
    width: 2rem;
  
    border: ${props => props.theme.colors.background} solid 1px;
    border-radius: 50%;
    outline: none;
  
    background: ${props => props.theme.colors.background};
    background-image: url("/icons/config.png");
    background-repeat: no-repeat;
    background-size: 1.3rem;
    background-position: center;
  
    padding: 1rem;
    margin: 0 0 3rem 1rem;
  
    transition: all 0.4s;
    filter: invert(20%);
`

export const Dropdown = styled.div`
    position: absolute;
    right: 0;
    top: 1.25rem;
  
    height: auto;
    width: auto;
    padding: 0.3rem 1rem;
    margin: 1rem;
  
    background: ${props => props.theme.colors.colorGrayLine};
    border-radius: 3px;

    ul {
        list-style-type: none;
    }

    ul li {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul li p {
        margin-right: 1rem;
        font-size: 1rem;
        border-bottom: 1px solid ${props => props.theme.colors.text};
    }
`