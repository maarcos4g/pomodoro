import playArrow from '../../assets/images/play_arrow.svg'
import cancelIcon from '../../assets/images/cancel.svg'
import checkCircle from '../../assets/images/check_circle.svg'

import { Modal } from '../ModalBreak'
import { useCountdown } from '../../hooks/useCountdown'

import './styles.scss'

export function Countdown() {

    const {
        isActive,
        hasFinished,
        openModal,
        startCountdown,
        resetCountdown,
        minutes,
        seconds,
        setOpenModal
        
    } = useCountdown();

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <>
            <div className="countdown">
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                hasFinished ? (
                    <button
                        disabled
                        className='startCycleButton'
                    >
                        Ciclo encerrado
                        <img src={checkCircle} alt="Encerrado" />
                    </button>
                ) : (
                    <>
                        {
                            isActive ? (
                                <button
                                    type='button'
                                    className="startCycleButton startCycleButtonActive"
                                    onClick={resetCountdown}
                                >
                                    Cancelar contagem
                                    <img src={cancelIcon} alt="Cancelar" />
                                </button>
                            ) : (
                                <button
                                    type='button'
                                    className='startCycleButton'
                                    onClick={startCountdown}
                                >
                                    Iniciar ciclo de contagem
                                    <img src={playArrow} alt="Play" />
                                </button>
                            )
                        }
                    </>
                )
            }

            <>
            {
                openModal && <Modal closedModal={() => setOpenModal(false)} />
            }
            </>

        </>
    );
}