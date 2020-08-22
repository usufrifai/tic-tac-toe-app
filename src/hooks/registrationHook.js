import { useState } from 'react';

const useRegistrationHook = () => {

    const [firstPlayer, setFirstPlayer] = useState("");
    const [secondPlayer, setSecondPlayer] = useState("");
    const [registationError, setRegistationError] = useState(null);
    const [users, setUsers] = useState({});

    const onRegistationSubmit = (e) => {
        e.preventDefault();
        if(firstPlayer &&  secondPlayer &&  firstPlayer !== secondPlayer){
            setUsers({firstPlayer, secondPlayer})
            registationError && setRegistationError(null);
        }
        else
        setRegistationError(true)
    }

    const clearUsersInfo = () => {
        setUsers({});
        setFirstPlayer("");
        setSecondPlayer("");
    } 
    
    return {
       users,
       registationError,
       onRegistationSubmit,
       setFirstPlayer,
       setSecondPlayer,
       firstPlayer,
       secondPlayer,
       clearUsersInfo,
       setUsers,
    }
}

export default useRegistrationHook;



