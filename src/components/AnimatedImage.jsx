/* Este es un componente que se va a reenderizar desde el cliente por esta razon tenemos que convertilo en un componenet de vista de cliente y no de servidor para eso hacemos lo siguiente: */
'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
const desdeIzquierda = {
    /* Indicar el valor que tendra el objeto que queremos animar antes de animarlo. */
    initial: {
      /* Estas dos propiedades o valores indican que nuestro objeto tendra opacidad 0 osea que no se verá y estará ubicado fuera de la pagina del lado izquierdo. */
      opacity: 0,
      x: -50,
    },
      /* Aqui vamos a agregar la animacion que queremos realizar. */
  animate: {
    /* Aqui indicaremos que nuestro objeto se muestre agregandole el valor de opacidad 1 y aparte de eso le indicaremos que se desplace +10 a la derecha o en el eje x, y tercero que tenga una transition y le agregamos la duracion que durara la animacion  */
    opacity: 1,
    x: 10,
    transition: {
      duration: 3,
    },
  },
}
/* Aqui hicimos un componente nuestro elemento animado en este caso fue una imagen, esta imagen se estara reenderizando en la page.js  */
export const AnimatedImage = ({src}) => {
   
  return (
    <div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={desdeIzquierda}
          className="w-full"
        >
           {/* Image es la etiqueta que nos ofrece netx y para hacer ver la imagene se necesita colocar el width y el height  */}
          <Image
            width={500}
            height={500}
            src={src}
            alt=""
          />
        </motion.div>
    </div>
  )
}
