import { createContext, ReactNode, useEffect, useState } from "react";

type CountdownProviderProps = {
    children: ReactNode;
}

type CountdownContextData = {
    isActive: boolean;
    hasFinished: boolean;
    openModal: boolean;
    setOpenModal: (value: React.SetStateAction<boolean>) => void;
    minutes: number;
    seconds: number;
    resetCountdown: () => void;
    startCountdown: () => void;
}

let countdownTimeout: ReturnType<typeof setTimeout>;

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {

    const [time, setTime] = useState(25.0 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setOpenModal(true);
        }
    }, [isActive, time])

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25.0 * 60);
        setHasFinished(false);
    }

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <CountdownContext.Provider value={{
            isActive,
            hasFinished,
            openModal,
            resetCountdown,
            startCountdown,
            setOpenModal,
            minutes,
            seconds,
        }}>
            {children}
        </CountdownContext.Provider>
    );
}