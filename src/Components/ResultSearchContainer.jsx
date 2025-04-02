import PropTypes from "prop-types"
import { useEffect } from "react"
import { useState } from "react"

const ResultSearchContainer = ({username, clicked}) => {

    const [userData, setUserData] = useState(null)
    const [userName, setUserName] = useState(null)
    const [avatarUrl, setAvatarUrl] = useState('')
    const [userBio, setUserBio] = useState('')
    
    const [result, setResult] = useState(null)
    // const [counterInitial, setCounterInitial] = useState(0)
    // const username = 'bmr23'

    useEffect(() => {
        setUserName(() => userData ? userData.login : '')
        setAvatarUrl(() => userData ? userData.avatar_url : '')
        setUserBio(() => userData ? userData.bio : '')
        setResult(true)
    }, [userData])

    useEffect(() => {

        const fetchUser = async () => {
            try {
                setUserData(null)
                console.log(username)
                const response = await fetch(`https://api.github.com/users/${username}`)

                if (!response.ok) {
                    throw new Error("Usuário não encontrado")
                }

                const data = await response.json()
                setUserData(data);

            } catch {
                setResult(false)
                return false
            }
        }

        fetchUser()

    }, [username])

    return (
        <>
            {clicked && ( 
                <div className="max-w-[95%] sm:max-w-[1000px] sm:w-auto w-[400px] mx-auto bg-[#D9D9D9] rounded-3xl py-4 mt-9 text-xl"
                >
            
                {!result && (
                    <div id="notFound" className="text-center text-red-600">
                        <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
                        <p className="">Tente novamente </p>
                    </div>
                )}
                {result && (
                    <div className="max-w-[90%] mx-auto">
                        <div id="users" className="flex gap-5 sm:gap-8 flex-col sm:flex-row items-center sm:items-center">
                            <img
                                className="rounded-full border-blue-600 border-2 size-55"
                                src={avatarUrl}
                                alt="" />
                            <div id="name_description"
                                className="m-auto flex flex-col sm:items-start items-center mx-0"
                                >
                                <h2
                                    className="text-2xl text-blue-600 font-bold capitalize pb-5"
                                >
                                    {userName}
                                </h2>
                        
                                <p className="text-[1rem]"> {userBio || "Sem biografia"}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                </div>
            )}
        </>
    )
}

ResultSearchContainer.propTypes = {

}

export default ResultSearchContainer