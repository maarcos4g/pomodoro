import { useEffect } from 'react';
import { Countdown } from '../../components/Countdown';
import { Profile } from '../../components/Profile';
import './styles.scss'

export function Home() {

    useEffect(() => {})

    return (
        <div className="container-home">
            <Profile />

            <Countdown />
        </div>
    );
}