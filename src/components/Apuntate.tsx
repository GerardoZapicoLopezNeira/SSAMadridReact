import React from 'react'
const styles = {
    fontSize: "21px",
    color: "black"
};
export default function Apuntate () {
  return (
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mx-2">
              <p  style={styles}>1. Mira las descripciones de los talleres para saber a cuales estarías interesado en asistir.</p>
              <p  style={styles}>2. Mira horarios para saber a qué sesiones puedes asistir.</p>
              <p  style={styles}>3. Rellena el <a id="formulario" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf1w9jHgUJP0HtxGFUVU2r3urf2rhihW671TNRDb2YSR6b0_g/viewform?usp=sf_link">formulario</a> de google de la sesión a la que quieras ir. Presta especial interés a la motivación para la asistencia al taller ya que será nuestra única forma de elegir a los asistentes ya que tenemos plazas limitadas.</p>
              <p  style={styles}>4. Rellenar tantos formularios como a talleres se quiera asistir.</p>
              <p  style={styles}>5. Recibirás un correo confirmando tu asistencia.</p>
              <p  style={styles}>6. Al menos 5 días antes del taller te contactaremos para pedir confirmación.</p>
            </div>
          </div>
        </div>
  )
}
