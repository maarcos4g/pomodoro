import logo from '../../assets/images/symbol.png'
import googleIcon from '../../assets/images/google-icon.svg'

import './styles.scss'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Login() {

    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();

    async function handleSignIn() {
        if (!user) {
            await signInWithGoogle();
        }

        navigate({pathname: "/home"});
    }

    useEffect(() => {
        if (user?.isAuthenticated) {
            navigate({pathname: "/home"});
        }
    }, [user])

    return (
        <div className='container'>
            <div className='login-box'>
                <img src={logo} alt="Pomodoro Logo" />
                <span>
                    Te ajudamos a gerenciar seu tempo de estudo e trabalho.
                </span>
                <button
                    type='button'
                    className='login-button'
                    onClick={handleSignIn}
                >
                    <img src={googleIcon} alt="Google icon" />
                    <div className="separator"></div>
                    <span>Entrar com Google</span>
                </button>
            </div>
        </div>
    );
}