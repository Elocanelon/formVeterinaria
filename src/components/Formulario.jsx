import { useState } from "react"

const Formulario = () => {
   
   const [nombre, setNombre] = useState('')
   const [propietario, setPropietario] = useState('')
   const [email, setEmail] = useState('')
   const [alta, setAlta] = useState('')
   const [sintomas, setSintomas] = useState('')

    return(
        <div className="md:w-1/2 lg:w-2/5">
         <h1 className="font-black text-3xl text-center">Seguimiento pacientes</h1>

         <p className="text-lg mt-5 text-center">Añade pacientes y {' '}
         <span className="text-indigo-600 font-bold">administralos</span>
         </p>
        
        <form className="bg-white shadow-md rounded-lg px-10 py-5">
            <div>
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

          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente"/>

        </form>
        
        
        
        </div>
    )
}

export default Formulario