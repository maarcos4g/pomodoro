import { useAuth } from '../../hooks/useAuth';
import './styles.scss';

export function Profile() {

    const { user } = useAuth();

    return (
        <div className="profile">
            <img src={user?.avatar} alt={user?.name} />
            <div>
                <strong>{user?.name}</strong>
                <p>{user?.email}</p>
            </div>
        </div>
    );
}