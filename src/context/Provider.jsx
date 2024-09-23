
import AppContext from "./AppContext";


const Provider = ({children}) => {
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
};

export default Provider;