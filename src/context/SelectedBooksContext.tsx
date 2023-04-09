import { ReactNode, useState, createContext } from "react";

type SelectedBoksProviderProps = {
    children: ReactNode
}

type SelectedBook = {
    id: string
}

type SelectedBooksContext = {
    selectedBooks : SelectedBook[]
    selectedQuantity: number
    selectBook: (id: string) => void
    releaseBook: (id: string) => void
}

export const SelectedBooksContext = createContext({} as SelectedBooksContext)


export const SelectedBooksProvider = ({ children }: SelectedBoksProviderProps) => {
    const [ selectedBooks, setSelectedBooks ] = useState<SelectedBook[]>([])
    const selectedQuantity = selectedBooks.length;

    const selectBook = (id: string) => {
        setSelectedBooks(currBooks => {
            if(currBooks.find(book => book.id === id)?.id == null) return [...currBooks, {id}]
            return [...currBooks]
        })
    }

    const releaseBook = (id : string) => {
        setSelectedBooks(currBooks => {
            return currBooks.filter(book => book.id !== id)
        })
    }
    
    return (
        <SelectedBooksContext.Provider 
            value={{
                selectedBooks,
                selectedQuantity,
                selectBook,
                releaseBook
            }}
        >
            {children}
        </SelectedBooksContext.Provider>
    );
};
