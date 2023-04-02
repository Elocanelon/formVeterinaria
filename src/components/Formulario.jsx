import { useEffect, useState } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
   
   const [nombre, setNombre] = useState('')
   const [propietario, setPropietario] = useState('')
   const [email, setEmail] = useState('')
   const [alta, setAlta] = useState('')
   const [sintomas, setSintomas] = useState('')

   const [error, setError] = useState(false)

   const generarId = () => {
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)

    return random + fecha

   }

   const handleSubmit = (e) => {
        e.preventDefault();

        //validacion de formulario
        if([nombre, propietario, email, alta, sintomas].includes("")){
            console.log("Hay Al menos un campo vacio")
            setError(true)
            return; 
        } 
            setError(false)

            const ObjetoPaciente = {
                nombre,
                propietario,
                email,
                alta,
                sintomas,
                id: generarId()
            }
            

            if(paciente.id){
                
                ObjetoPaciente.id = paciente.id
                const ObjetoPacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? ObjetoPaciente : pacienteState)

                setPacientes(ObjetoPacienteActualizado)
                setPaciente({})
               } else {
                ObjetoPaciente.id = generarId()
                setPacientes([...pacientes, ObjetoPaciente])
         
               }
        
        
            //reiniciar formulaio
        setNombre("")
        setPropietario("")
        setEmail("")
        setAlta("")
        setSintomas("")
         
   }

 

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
     setNombre(paciente.nombre)
     setPropietario(paciente.propietario)
     setEmail(paciente.email)
     setAlta(paciente.alta)
     setSintomas(paciente.sintomas)

    }
  }, [paciente])
    return(
        <div className="md:w-1/2 lg:w-2/5">
         <h1 className="font-black text-3xl text-center">Seguimiento pacientes</h1>

         <p className="text-lg mt-5 text-center">Añade pacientes y {' '}
         <span className="text-indigo-600 font-bold">administralos</span>
         </p>
        
        <form className="bg-white shadow-md rounded-lg px-10 py-5" onSubmit={handleSubmit}>
            <div>
                {error && <Error><p>Todos los campos son requeridos</p></Error>}
                <label className="block text-gray-700 uppercase font-bold" htmlFor="Nombre">Nombre Mascota</label>
                <input type="text" id="Nombre" placeholder="Nombre de mascota" className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="mt-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="Propietario">Propietario:</label>
                <input type="text" id="Propietario" placeholder="Nombre del propietario" className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
            </div>
            <div className="mt-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="Email">Correo electronico</label>
                <input type="email" id="Email" placeholder="Correo propietario" className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mt-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="Alta">Fecha alta</label>
                <input type="date" id="Alta" placeholder="Alta" className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md" value={alta} onChange={(e) => setAlta(e.target.value)}/>
            </div>
            <div className="mt-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="Sintomas">Sintomas</label>
                <textarea type="text" id="Sintomas" placeholder="Nombre de mascota" className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-md" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
            </div>

          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? "Editar paciente" : "Agregar paciente"}/>

        </form>
        
        
        
        </div>
    )
}

export default Formulario