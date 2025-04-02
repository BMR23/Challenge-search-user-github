import GithubLogo from "./Components/GithubLogo"
import './App.css'
import ButtonSearch from "./Components/ButtonSearch"
import ResultSearchContainer from "./Components/ResultSearchContainer"
import { useState, useRef } from "react"

const App = () => {
    const refInput = useRef(null)
    const refButton = useRef(null)
    const [username, setUserName] = useState('')
    const [firstClick, setFirstClick] = useState(false)

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log(e.key)
            refButton.current.click()
        }
    }

    const clicked = () => {
        setUserName(()=> refInput.current.value)
        setFirstClick(true)
    } 

    return (
        <div className="bg-black h-[100dvh]">
            <div className="container mx-auto pt-10">
                <header className="title flex justify-center items-center gap-3">
                    <GithubLogo styles={'h-12 sm:h-16'}/>
                    <h1 className="text-white text-4xl sm:text-7xl"
                    >Perfil <strong>GitHub</strong></h1>
                </header>

                <div className="bg-white flex sm:w-2xl w-80 max-w-[95%] mx-auto mt-10 rounded-md items-center">
                    <input
                        onKeyDown= {handleKeyDown}
                        ref={refInput}
                        type="text" 
                        placeholder="Digite um usuário do GitHub" 
                        className="w-full sm:h-17 h-12 sm:text-2xl text-[1rem] sm:pl-5 pl-3 placeholder-black focus:outline-none"/>

                    <ButtonSearch 
                        ref={refButton}
                        funcOnClick={clicked}
                        stylesButton={"sm:h-17 h-12 sm:w-21 w-15 rounded-md bg-blue-600 flex items-center justify-center cursor-pointer"}
                        stylesIcon={"text-white sm:h-10 h-7"}
                    />
                </div>

                <ResultSearchContainer username={username} clicked={firstClick}/>
            </div>
        </div>
    )
}

export default App