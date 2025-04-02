import GithubLogo from "./Components/GithubLogo"
import './App.css'
import ButtonSearch from "./Components/ButtonSearch"
import ResultSearchContainer from "./Components/ResultSearchContainer"

const App = () => {
    return (
        <div className="bg-black h-[100dvh]">
            <div className="container mx-auto pt-10">
                <header className="title flex justify-center items-center gap-3">
                    <GithubLogo styles={'h-10 sm:h-16'}/>
                    <h1 className="text-white text-3xl sm:text-7xl"
                    >Perfil <strong>GitHub</strong></h1>
                </header>

                <div className="bg-white flex sm:w-2xl w-80 max-w-[99%] mx-auto mt-10 rounded-md items-center">
                    <input type="text" placeholder="Digite um usuário do GitHub" className="w-full sm:h-17 h-12 sm:text-2xl text-[.9rem] sm:pl-5 pl-3 placeholder-black"/>
                    <ButtonSearch 
                        stylesButton={"sm:h-17 h-12 sm:w-21 w-15 rounded-md bg-blue-600 flex items-center justify-center"}
                        stylesIcon={"text-white sm:h-10 h-7"}
                    />
                </div>

                <ResultSearchContainer />
            </div>
        </div>
    )
}

export default App