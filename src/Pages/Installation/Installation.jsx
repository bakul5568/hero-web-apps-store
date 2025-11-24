import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [ installation, setInstallation] = useState([])

    useEffect(() =>{
        const saveInstalled =  JSON.parse(localStorage.getItem('installation'))
        if (saveInstalled) setInstallation(saveInstalled)
    },[])
    return (
        <div>
            {installation.length}
        </div>
    );
};

export default Installation;