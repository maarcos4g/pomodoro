import { useAuth } from '../../hooks/useAuth';
import { useCountdown } from '../../hooks/useCountdown';

import body from '../../assets/images/body.svg'

import './styles.scss'

type ModalProps = {
    closedModal: (value: React.SetStateAction<boolean>) => void;
}

export function Modal({closedModal}: ModalProps) {

    const { user } = useAuth();
    const { resetCountdown } = useCountdown();

    const name = user?.name;

    const [firstName, secondName] = String(name).split(' ');

    function handleResetCountdown() {
        resetCountdown();
        closedModal(false);
    }

    return (
        <div className="modal-background">
            <div className="modal-container">
                <span>Hora de dar um relaxada!</span>
                <hr />
                <img src={body} alt="Google" />
                <strong>Dê uma pausa{user && `, ${firstName}...`}</strong>
                <p>
                    Agora, levante e descanse um pouco seu corpo e os seus olhos.
                </p>
                <p>
                    Caminhe por alguns minutos e estique suas pernas para que você fique saudável.
                </p>
                <footer>
                    <button
                        onClick={handleResetCountdown}
                    >
                        Ignorar
                    </button>
                    <button
                        onClick={handleResetCountdown}
                    >
                        Completei
                    </button>
                </footer>
            </div>
        </div>
    );
}