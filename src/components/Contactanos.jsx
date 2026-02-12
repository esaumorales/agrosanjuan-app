import { Icon } from "@iconify/react";
import Button from "./ui/Button";

export default function Contactanos() {
    return (
        <section id="contact" className="flex flex-col-reverse md:flex-row w-full h-auto justify-between px-8 md:px-24 font-headline py-12 gap-12 md:gap-24 text-primary">
            <div className="w-full md:flex-1 space-y-4">
                <div>
                    <h1 className="text-2xl font-bold">Contáctanos</h1>
                </div>
                <div>
                    <p>
                        ¿Interesado en nuestros productos o tiene alguna consulta?
                        Completa el formulario y nuestro equipo se pondrá en contacto con usted a la brevedad.
                    </p>
                </div>
                <div>
                    <form action="" className="flex flex-col gap-4">
                        <input type="text" placeholder="Nombre" className="border border-gray-300 rounded-md px-4 py-2" />
                        <input type="email" placeholder="Correo" className="border border-gray-300 rounded-md px-4 py-2" />
                        <input type="text" placeholder="Asunto" className="border border-gray-300 rounded-md px-4 py-2" />
                        <textarea placeholder="Mensaje" className="border border-gray-300 rounded-md px-4 py-2"></textarea>
                        <Button type="submit" variant="submit" text='Enviar Mensaje' className="w-40" />
                    </form>
                </div>
            </div>
            <div className="w-full md:flex-1 space-y-4">
                <div>
                    <h2 className="text-2xl font-bold">Información de Contacto</h2>
                </div>
                <div className="flex flex-row gap-2">
                    <Icon icon="lsicon:location-outline" className="text-primary" width={24} height={24} />
                    <div>
                        <p className="font-bold">Dirección</p>
                        <p className="">Finca San Juan, Lote 123, Pichanaki - Junín, Perú</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <Icon icon="mdi-light:phone" className="text-primary" width={24} height={24} />
                    <div>
                        <p className="font-bold">Celular</p>
                        <p className="">+51 987 654 321</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <Icon icon="mdi-light:email" className="text-primary" width={24} height={24} />
                    <div>
                        <p className="font-bold">Correo</p>
                        <p className="">fincasanjuan@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}