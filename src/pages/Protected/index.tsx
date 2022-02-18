import { Link } from 'react-router-dom';

import './styles.scss'

import { useAuth } from '../../hooks/useAuth';

import { Home } from '../Home'

export function ProtectedPage() {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className='protected-container'>
                <h1 className='message'>
                    Você ainda não tem conta,
                    clique no botão abaixo e cadastre-se primeiro para
                    utilizar o Pomodoro.
                </h1>

                <Link to="/">Fazer Login</Link>
            </div>
        );
    }

    return <Home />;
}