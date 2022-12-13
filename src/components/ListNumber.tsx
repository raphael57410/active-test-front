import type { TNumber } from "../types/number";

type Props = {
    data: TNumber[]
}
export function ListNumber(props: Props) {

    return (
        <div>
            <h2 className={"mb-6 text-center text-xl"}>Listes des nombres</h2>
            <ul className={"grid grid-cols-4 gap-4"}>
            {props.data &&
                props.data.map((number: TNumber,key:number) =>
                    <li className={"border-solid border-2 border-sky-500 p-6 rounded font-bold"} key={key}>{number.number}</li>
                )
            }
            </ul>
        </div>
    );
}
