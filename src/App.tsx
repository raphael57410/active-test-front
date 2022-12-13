import { Input } from "./components/common/Input";
import { Button } from "./components/common/Button";
import { useState } from "react";
import { fetcher, fetchUtils } from "./utils/axios";
import { ListNumber } from "./components/ListNumber";
import useSWR from "swr";
import { TNumber } from "./types/number";

function App() {
    const { data, error, mutate } = useSWR(
        "http://localhost:3001/api/number",
        fetcher<TNumber[]>
    );
    const [number,setNumber] = useState<string>()
    const [errorMessage,setErrorMessage] = useState<string>("")

    function isNumber(str:any) {
        if (str.trim() === '') {
            return false;
        }
        return !isNaN(str);
    }

    if (!data) return <p>Loading...</p>;

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-wrap">
     <div className={"w-full flex flex-col items-center justify-center gap-4"}>
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
         <Button height={"lg"} type={"button"} content={"Envoyer"} color={"secondary"} onClick={async () => {
             if (!number?.length){
                 setErrorMessage("️️⛔️ Veuillez entrer un nombre valide svp")
             }else{
                 fetchUtils.post("http://localhost:3001/api/number", { number }).then(_res => {
                     setNumber('');
                 })
                 await mutate({ ...data?.data, number })
             }
         }
         }/>
         {errorMessage && <span className={"text-textError"}>{errorMessage}</span>}
     </div>
        {data && <ListNumber data={data.data}/>}
    </div>
  )
}

export default App
