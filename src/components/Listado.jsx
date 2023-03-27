import Paciente from "./paciente"

const ListadoPacientes = () => {
    return(
        <div className="w-1/2 lg:w-3/5 overflow-y-scroll">

            <h1 className="font-black text-3xl text-center">Listado de pacientes</h1>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>

           <Paciente />
           <Paciente />
           <Paciente />
         
        </div>
    )

}

export default ListadoPacientes