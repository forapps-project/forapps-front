import { ReactElement, createContext, useState, useMemo } from 'react';

interface ModalsProviderProps {
    children: ReactElement | ReactElement[]
}

export const ModalsDispatchContext = createContext<{
    openModal: () => void;
    closeModal: () => void;
}>({
    openModal: () => {return;},
    closeModal:() => {return;}
});

export const ModalsStateContext = createContext<boolean|null>(false)

const ModalsProvider = ({children}:ModalsProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const dispatch = { openModal, closeModal };

    return (
        <ModalsStateContext.Provider value={isModalOpen}>
            <ModalsDispatchContext.Provider value={dispatch}>
                {children}
            </ModalsDispatchContext.Provider>
        </ModalsStateContext.Provider>
    )
}

export default ModalsProvider;

/* interface openFunc {
    (Component: ReactNode, props: string[]): void
}

interface modalDispatchContext {
   open():void,
   close():void,
}

interface openedModal {
    Component: ReactNode,
    props: any,
}

interface modalsProviderProps {
    children: ReactNode;
}

export const ModalsDispatchContext= createContext({} as modalDispatchContext)

export const ModalsStateContext = createContext([]);


const ModalsProvider = ({ children }:modalsProviderProps) => {
    const [openedModals, setOpenedModals] = useState<openedModal[]>([]);
    //컴포넌트와, 거기에 넘겨줄 props를 state에 저장

    const open: openFunc = (Component, props) => {
        setOpenedModals((modals) => {
            return [...modals, { Component, props }];
        });
    };

    const close = (Component: ReactNode) => {
        setOpenedModals((modals) => {
            return modals.filter((modal) => {
                return modals.Component !== Component;
            })
        })
    }

    const dispatch = useMemo(() => ({open, close}), []);


    return (
        <ModalsStateContext.Provider value={openedModals}>
            <ModalsDispatchContext.Provider value={dispatch}>
                {children}
            </ModalsDispatchContext.Provider>
        </ModalsStateContext.Provider>
    )
}

export default ModalsProvider; */