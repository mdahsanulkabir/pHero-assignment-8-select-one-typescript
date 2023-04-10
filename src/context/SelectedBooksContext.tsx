import { ReactNode, useState, createContext } from "react";
import Toast from "../utility/Toast";

type SelectedBoksProviderProps = {
    children: ReactNode
}

export type SelectedBook = {
    id: string
}

type SelectedBooksContext = {
    selectedBooks : SelectedBook[]
    selectedQuantity: number
    selectBook: (id: string) => void
    releaseBook: (id: string) => void
    showA: boolean
    toggleShowA : () => void
    reset: () => void
}

export const SelectedBooksContext = createContext({} as SelectedBooksContext)


export const SelectedBooksProvider = ({ children }: SelectedBoksProviderProps) => {
    const [ selectedBooks, setSelectedBooks ] = useState<SelectedBook[]>([])
    const [ showA, setShowA ] = useState<boolean>(false)
    const selectedQuantity = selectedBooks.length;

    const toggleShowA = () => setShowA(!showA)

    const selectBook = (id: string) => {
        if(selectedQuantity > 3) {
            toggleShowA();
        } else {
            setSelectedBooks(currBooks => {
                if(currBooks.find(book => book.id === id)?.id == null) return [...currBooks, {id}]
                return [...currBooks]
            })
        }
    }

    const releaseBook = (id : string) => {
        setSelectedBooks(currBooks => {
            return currBooks.filter(book => book.id !== id)
        })
    }

    const reset = () => {
        setSelectedBooks([])
    }
    
    return (
        <SelectedBooksContext.Provider 
            value={{
                selectedBooks,
                selectedQuantity,
                selectBook,
                releaseBook,
                showA,
                toggleShowA,
                reset
            }}
        >
            {children}
            <Toast showA={showA} toggleShowA={toggleShowA}/>
        </SelectedBooksContext.Provider>
    );
};
