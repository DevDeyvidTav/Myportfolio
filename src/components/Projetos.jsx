    import { useFetch } from "../hooks/useFetch"
    import Button from "@material-tailwind/react/components/Button"
    
    export function Projetos(){
        const {data, loading} = useFetch()
        console.log(data)
        return(
           
                <ul className="flex flex-col w-screen h-3/4 items-center justify-center ">
                    {loading && <p> carregando... </p>}
                    <div className="flex flex-col gap-2 p-3 items-center justify-center shadow-2xl shadow-zinc-800 rounded-md w-4/5 tablet-m:w-96 h-4/5">
                {data.map((item, i) => {
                        return <li key={i}><a href={item.clone_url}_blank><Button className="px-10 py-2 rounded-md flex items-center bg-zinc-800">{item.name}</Button></a></li>
                    }
                    )}
                    </div>
                </ul>
           
        )
    }