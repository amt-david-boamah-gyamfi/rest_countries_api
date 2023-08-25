import { BsMoon } from 'react-icons/bs';
import * as C from './Headerstyles'
import { useContext } from 'react';
import { myContext } from '../Contexts/MyContexts';



const Header = () => {
    const themeContext = useContext(myContext);
    return (
        <C.Header>
            
                <h1>Where in the world?</h1>
                <p onClick={themeContext?.toggle}>
                    <span className='react-icon'>
                        <BsMoon />
                    </span>
                    {themeContext?.theme ? 'Dark Mode' : 'Light Mode'}

                </p>
            




        </C.Header>
    )
}

export default Header