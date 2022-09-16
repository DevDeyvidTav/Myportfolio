import dtstore from '../images/dtstore.png'




export function DTstore(){
    return(
        <div className="w-screen flex flex-col items-center justify-between bg-zinc-200 h-screen max-h-full max-w-full">
            <img className="coffeeshop-img| w-full shadow-2xl  h-40" src={dtstore} alt="" />
            <div className='text-container| flex flex-col w-[80%] h-[60%] mb-10 rounded-lg shadow-xl'>
                <p className='title| ml-10 mt-5 text-5xl text-zinc-900 font-black'>DTstore</p>
                <p className='considarations| w-full text-center mt-5 text-xl text-zinc-600'>A DTstore é um mini e-commerce que se utiliza apenas de ferramentas front-end, nas quais o usuario pode adicionar produtos ao carrinho e finalizar a compra</p>
                <div className='iterables| w-full h-full flex'>
                    <div className='skills| tablet-m:ml-24 ml-10 justify-center gap-5 text-xl text-zinc-500 flex flex-col w-1/2 h-full'>
                        <p>React.js</p>
                        <p>Tailwindcss</p>
                        <p>contextAPI</p>
                    </div>
                    <div className='code-buttons| justify-center gap-4 flex flex-col w-1/2 h-full'>
                        <a href="https://github.com/DevDeyvidTav/My-E-commerce" target="_blank"><button className='bg-zinc-900 mr-3 p-1 rounded-full tablet-m:w-72 text-white'>Código</button></a>
                        <a href="https://my-e-commerce-nu.vercel.app/" target="_blank"><button className='bg-zinc-900 mr-3 p-1 rounded-full tablet-m:w-72 text-white' >Veja o site</button></a>
                    </div>
                </div>
            </div>
            <a href="/#Projetos"><button className='text-xl font-bold mb-5'>voltar</button></a>
        </div>
    )
}