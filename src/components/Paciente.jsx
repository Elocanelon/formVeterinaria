const Paciente = () => {
    return(
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">Jack</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">Eloy</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Correo {''}
            <span className="font-normal normal-case">Correo@correo</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Alta: {''}
            <span className="font-normal normal-case">26/03/2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas {''}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, ullam. Omnis veritatis, libero eaque ut esse illum assumenda quisquam obcaecati dignissimos magnam perferendis! Odit consectetur sapiente quas cum dolorem quo.</span>
        </p>
    </div>
    )
}

export default Paciente