import React,{createContext,useEffect,useState} from "react";

export const ListContext = React.createContext();

export const ListProvider = (props) =>{

    const [Users,setUsers] = useState([]);

    return(
        <>
            <ListContext.Provider value={[Users,setUsers]}>
                {props.children}
            </ListContext.Provider>
        </>
    )
}