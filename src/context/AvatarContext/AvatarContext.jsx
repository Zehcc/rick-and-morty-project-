import React, { useState, useContext } from 'react'

export const AvatarContext = React.createContext();

export const useAvatarContext = () => {
    return useContext(AvatarContext)
}

const AvatarProvider = ({children}) => {
    const [avatar, setAvatar] = useState({
        name:'Desconocido',
        image:'https://us.123rf.com/450wm/metelsky/metelsky1809/metelsky180900220/109815466-perfil-de-avatar-de-hombre-silueta-de-rostro-masculino-o-icono-aislado-sobre-fondo-blanco-ilustraci%C3%B3.jpg?ver=6'
    })

    const changeAvatar = (object) => {
        setAvatar({
            name: object.name,
            image: object.image
        })
    }

    return (
    <AvatarContext.Provider value={{avatar, changeAvatar}}>
        {children}
    </AvatarContext.Provider>

  )
}

export default AvatarProvider