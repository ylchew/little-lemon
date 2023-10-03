import { createContext, useState } from 'react'

export const StateContext = createContext()

export const StateProvider = ({children}) => {

    const todayDate = new Date().toISOString().slice(0, 10)
    const [ state, setState ] = useState({
        currentDate: todayDate,
        today: todayDate
    })

    return(
        <StateContext.Provider value={[ state, setState ]}>
            {children}
        </StateContext.Provider>
    )

}
