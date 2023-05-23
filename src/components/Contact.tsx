//------- Dependencies
import { useState, useRef, FormEvent } from "react"


//------- Models
import { formValuesInterface, messageCard } from "@/models"

//------- Utils
import { sendData, validateInput } from "@/utils/form.util"


export function Contact(){
    //--------- Config and variables defined
    const defaultFormValues = {
        name:"",
        email:"",
        linkedin:"",
        message:""
    }

    //---------------------- Change and Validate values
    const [values , setValues] = useState<formValuesInterface>(defaultFormValues)

    const changeValue = (e:any):void => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
        validateInput(e.target, value, 'ContactMe__input--error')
    }


    //---------------------- Submit Form
    const submitButton = useRef<HTMLInputElement | null>(null)

    const submitForm = (e:FormEvent) => {
        e.preventDefault()
        if(submitButton.current != null){
            sendData(values, submitButton.current, newMessage)
        }
    }

    //------------------------------ Message Card
    const Message = useRef<HTMLDivElement | null>(null)

    const newMessage = (data:messageCard)=>{
        //-------- A dynamic message box is created here
        if(Message.current != null){ 
            let p:any = Message.current.firstElementChild //Reference to <p></p>
            p.textContent = data.message

            const messageBox = Message.current // Message Box <div></div>
            if(data.type == 'error'){
                messageBox.classList.add("Message--error")
                messageBox.classList.add("Message--active")

                setTimeout(()=>{ messageBox.classList.remove("Message--active") }, 2000)
                setTimeout(()=>{ messageBox.classList.remove("Message--error") }, 2400)
                return
            }
            messageBox.classList.add("Message--active")
            setTimeout(()=>{ messageBox.classList.remove("Message--active") }, 2000)
        }
    }


    return <section className="ContactMe" id="ContactMe">
        
    <h2 className="ContactMe__h2">CONTACTAME</h2>

    <form action="" className="ContactMe__form" onSubmit={submitForm}>

        <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
            <label htmlFor="inputName" className="ContactMe__label">*Nombre</label>
            <input type="text" name="name" id="inputName" onChange={changeValue} 
            value={values.name} className="ContactMe__input"/>
        </div>

        <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
            <label htmlFor="inputName" className="ContactMe__label">*Correo Electronico</label>
            <input type="text" name="email" id="inputName" onChange={changeValue} 
            value={values.email} className="ContactMe__input" />
        </div>

        <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
            <label htmlFor="inputName" className="ContactMe__label">Linkedin</label>
            <input type="text" name="linkedin" id="inputName" onChange={changeValue} 
            value={values.linkedin} className="ContactMe__input" />
        </div>
        
        <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
            <label htmlFor="inputMessage" className="ContactMe__label">*Mensaje</label>
            <textarea name="message" id="inputMessage" onChange={changeValue} 
            value={values.message} className="ContactMe__input ContactMe__textarea">
            </textarea>
        </div>

        <input type="submit" value="ENVIAR" className="ContactMe__submit" 
        data-aos="zoom-out" data-aos-duration="700" ref={submitButton} />

    </form>

    <div className="Message" ref={Message}>
        <p></p>
    </div>

</section>
} 