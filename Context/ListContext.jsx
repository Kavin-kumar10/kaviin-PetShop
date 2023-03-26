import React,{createContext,useEffect,useState} from "react";

export const ListContext = createContext();

export const ListProvider = (props) =>{
    const [User,setUser] = useState({
        Username:'',
        Email:'',
        password:''
    });

    const [Users,setUsers] = useState([]);

    return(
        <>
            <ListContext.Provider value={[Users,setUsers,User,setUser]}>
                {props.children}
            </ListContext.Provider>
        </>
    )
}