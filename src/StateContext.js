import { createContext, useContext, useState } from 'react'

const StateContext = createContext({
    stateContext: '',
    setStateContext: () => {}
})

export const useStateContext = () => {
    const stateContext = useContext(StateContext)

    if(stateContext === undefined) {
        throw new Error("useStateContext was used outside of its Provider")
    }

    return stateContext

}

export default function StateProvider({children}) {

    const todayDate = new Date().toISOString().slice(0, 10)
    const [ currentState, setCurrentState ] = useState({
        today: todayDate
    })

    return(
        <StateContext.Provider value={{ currentState, setCurrentState }}>
            {children}
        </StateContext.Provider>
    )

}

