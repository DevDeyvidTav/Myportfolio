import finances from '../images/finances.png'




export function Finances(){
    return(
        <div className="w-screen flex flex-col items-center justify-between bg-zinc-200 h-screen max-h-full max-w-full">
            <img className="finances-img| w-full shadow-2xl  h-40" src={finances} alt="" />
            <div className='text-container| flex flex-col w-[80%] h-[60%] mb-10 rounded-lg shadow-xl'>
                <p className='title| ml-10 mt-5 text-5xl text-zinc-900 font-black'>Finances</p>
                <p className='considarations| w-full text-center mt-5 text-xl text-zinc-600'>O Finances é um dashboard de finanças, no qual o usuário pode planejar sua saúde financeira com gráficos e informaçoes.</p>
                <div className='iterables| w-full h-full gap-10 flex'>
                    <div className='skills| tablet-m:ml-24 ml-10 justify-center gap-2 text-xl text-zinc-500 flex flex-col w-1/2 h-full'>
                        <p>React.ts</p>
                        <p>Tailwindcss</p>
                        <p>contextAPI</p>
                        <p>Styled-components</p>
                        <p>firebase-auth</p>
                        <p>firestoreDB</p>
                    </div>
                    <div className='code-buttons| justify-center gap-4 flex flex-col w-1/2 h-full'>
                        <a href="https://github.com/DevDeyvidTav/DashBoard" target="_blank"><button className='bg-zinc-900 mr-3 p-1 rounded-full tablet-m:w-72 text-white'>Código</button></a>
                        <a href="https://dash-board-indol.vercel.app/" target="_blank"><button className='bg-zinc-900 mr-3 p-1 rounded-full tablet-m:w-72 text-white' >Veja o site</button></a>
                    </div>
                </div>
            </div>
            <a href="/#Projetos"><button className='text-xl font-bold mb-5'>voltar</button></a>
        </div>
    )
}