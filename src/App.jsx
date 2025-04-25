import GithubLogo from "./Components/GithubLogo"
import './App.css'
import ButtonSearch from "./Components/ButtonSearch"
import ResultSearchContainer from "./Components/ResultSearchContainer"
import { useState, useRef } from "react"
import img1 from './assets/img/fundo/Camada_1.png';
import ellipse1 from './assets/img/fundo/Ellipse 1.png';
import ellipse2 from './assets/img/fundo/Ellipse 2.png';

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

    const reset = () => setFirstClick(false)

    return (
            <div className="relative h-[100dvh] w-[100vw] bg-[#1F1F1F] flex justify-center items-center overflow-hidden">
                <img src={img1} alt=""
                    className="hidden lg:block absolute top-[26px] left-[71px]"
                />
                <img src={ellipse1} alt=""
                className="absolute top-0  right-[-10rem] sm:right-[-16rem] lg:right-0"
                />
                <img src={ellipse2} alt=""
                className="absolute top-[500px] lg:top-[400px] left-[0px]"
                />
                {/* max-w-[1156px] max-h-[537px] */}
                <div className="bg-black relative w-full py-[38px] min-h-[544px] md:min-h-[537px] xl:w-[80.2%] xl:h-[66.3%] " >
                    <div className="container relative h-full flex flex-col items-center mx-auto">
                        <header onClick={reset} className="title flex justify-center items-center gap-3 cursor-pointer">
                            <GithubLogo styles={'h-12 sm:h-16 github-logo'}/>
                            <h1 className="text-white text-5xl sm:text-7xl title-logo"
                            >Perfil <strong>GitHub</strong></h1>
                        </header>
                        <div className="bg-white flex w-xl sm:w-2xl  max-w-[95%] mx-auto mt-10 rounded-md items-center">
                            <input
                                onKeyDown= {handleKeyDown}
                                ref={refInput}
                                type="text"
                                placeholder="Digite um usuário do GitHub"
                                className="w-full sm:h-17 h-[3.25rem] text-xl sm:text-2xl text-[1rem] sm:pl-5 pl-3 placeholder-black focus:outline-none"/>
                            <div className="sm:w-21 w-15">
                                <ButtonSearch
                                    ref={refButton}
                                    funcOnClick={clicked}
                                    stylesButton={"sm:h-17 h-14 sm:w-21 w-15 rounded-md bg-blue-600 flex items-center justify-center cursor-pointer"}
                                    stylesIcon={"text-white sm:h-10 h-7"}
                                />
                            </div>
                        </div>
                        <ResultSearchContainer username={username} clicked={firstClick}/>
            
                    </div>
                </div>
            </div>
    )
}

export default App