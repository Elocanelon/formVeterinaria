import Paciente from "./paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {
    
    
    return(
        <div className="w-1/2 lg:w-3/5 overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h1 className="font-black text-3xl text-center">Listado de pacientes</h1>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                    </p>
        
                {pacientes.map( paciente => (
                        <Paciente 
                        key = {paciente.id}
                        paciente = {paciente}
                        setPaciente = {setPaciente}/>       
                    ))}
               </>
            ) : (
                <>
                    <h1 className="font-black text-3xl text-center">No hay pacientes</h1>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza a agregar tus pacientes {''}
                        <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
                    </p>
                </>
            )}
            
         
        </div>
    )

}

export default ListadoPacientes