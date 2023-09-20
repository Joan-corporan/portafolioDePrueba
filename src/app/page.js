/* Esta page se esta sirviendo desde el servidor y para hacer que se reeenderice desde el cliente escribimos lo siguiente: 'use client'  */
/* "use client"; */
/* se realizo esta accion para poder implementar la libreria Framer-motion, si no se hace de esta manera nos saldra el error de que no se pueden servir componentes que causen un efecto visual desde el servidor y por eso cambiamos a que se reenderice desde el cliente. otra opcion seria hacer de forma aparte el componente que queremos animar y luego importarlo   */
import { AnimatedImage } from "@/components/AnimatedImage";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
/* import { motion } from "framer-motion"; */
/* aqui creamos la variante de la animacion que vamos a implementar, en initial indicamos el valor por defecto que va a tener nuestro componente o el objeto que queremos animar y luego en animate le indicaremos la animacion que queremos que se realice. */
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
};

export default function Home() {
  return (
    <div className="w-full h-full p-16">
      <main className="flex justify-center items-center w-full ">
        {/*
        importamos el componenete de la imagen animada y le indicamos la src y en el componente la recibimos coomo props 
        */}
        
        <AnimatedImage src='https://portfolio-demo-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-1.d43c09fa.png&w=1920&q=75'/>

        {/*
         Lo que sucede aqui es que estamos tratando de utilizar la libreria framer-motion y para implementarla necesitamos colocar "motion." al impricipio de la etiqueta luego se le agrefaron los atributos inicial y animate y comom valor el mismo nombre pero esto igual puede ser cualquier nombre, luego colocamos otra propiedad "variants" que esta como valor tendra la variable que contendra la animacion 
        */}
       {/* <motion.div
          initial="initial"
          animate="animate"
          variants={desdeIzquierda}
          className="w-1/2"
        >
           Image es la etiqueta que nos ofrece netx y para hacer ver la imagene se necesita colocar el width y el height 
          <Image
            width={500}
            height={500}
            
            src="https://portfolio-demo-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-1.d43c09fa.png&w=1920&q=75"
            alt=""
          />
        </motion.div>*/}
        <div className="w-1/2">
          <AnimatedText text={'Turning Vision Into Reality With Code And Design.'}/>
          {/* <h1 className="text-6xl font-bold">
            Turning Vision Into Reality With Code And Design.
          </h1> */}
          <p className="my-4 font-medium text-base">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development
          </p>
          {/* En este Link lo que se requiere hacer es un enlace de descarga para que funcione correctamente debemos colocar un href e indicar la direccion del archivo y segundo la propiedad target={'_blank'} y tercero la propiedad download={true} */}
          <Link
            href="/assets/images/Cv.pdf"
            className="flex bg-slate-800 rounded-lg text-slate-100 items-center justify-center p-2 hover:bg-slate-100 hover:text-slate-800 "
            target={"_blank"}
            download={true}
          >
            Curriculum
          </Link>
        </div>
      </main>
    </div>
  );
}
