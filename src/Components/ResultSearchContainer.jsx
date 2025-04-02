import PropTypes from "prop-types"

const ResultSearchContainer = () => {
    return (
        <div className="max-w-[1000px] mx-auto bg-[#D9D9D9] rounded-md  py-4 mt-9 text-xl">
            <div id="notFound" className="text-center text-red-600">
                <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
                <p className="">Tente novamente</p>
            </div>
            <div id="users" className="flex">
                <img src="" alt="" />
                <div id="name_description">

                </div>
            </div>
        </div>
    )
}

ResultSearchContainer.propTypes = {

}

export default ResultSearchContainer