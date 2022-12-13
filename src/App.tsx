import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ChangeEvent, useState } from "react";

function App() {
    const [number,setNumber] = useState<string>()
    const [errorMessage,setErrorMessage] = useState<string>("")

    function isNumber(str:any) {
        if (str.trim() === '') {
            return false;
        }
        return !isNaN(str);
    }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
     <div>
         <h1 className={"text-xl mb-4"}>Ajouter votre nombre</h1>
         <Input value={number} onChange={(event)=> {
             if (isNumber(event.target.value)) {
                 setNumber(event.target.value);
                 setErrorMessage("");
             } else {
                 setNumber('')
                 setErrorMessage("️️⛔️ Veuillez entrer un nombre valide svp")
             }
         }
         }/>
         <Button height={"lg"} type={"button"} content={"Envoyer"} color={"secondary"} onClick={() => {
             console.log(number);
         }
         }/>
         {errorMessage && <span className={"text-textError"}>{errorMessage}</span>}
     </div>
    </div>
  )
}

export default App
