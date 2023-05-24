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
            let p:any = Message.current.childNodes[1]  //Reference to <p></p>
            p.textContent = data.message

            const messageBox = Message.current // Message Box <div></div>
            if(data.type == 'error'){
                messageBox.classList.add("Message--error")
                messageBox.classList.add("Message--active")

                setTimeout(()=>{ messageBox.classList.remove("Message--active") }, 2500)
                setTimeout(()=>{ messageBox.classList.remove("Message--error") }, 2800)
                return
            }
            messageBox.classList.add("Message--active")
            setTimeout(()=>{ messageBox.classList.remove("Message--active") }, 2500)
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
    <svg width="50px" height="50px" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M11.576 1.424a.6.6 0 01.848 0l10.152 10.152a.6.6 0 010 .848L12.424 22.576a.6.6 0 01-.848 0L1.424 12.424a.6.6 0 010-.848L11.576 1.424zM12 8v4M12 16.01l.01-.011" stroke="#000000" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        <p></p>
    </div>

</section>
} 