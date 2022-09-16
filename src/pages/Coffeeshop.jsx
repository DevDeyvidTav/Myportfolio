import coffeeshop from '../images/coffeeshop.png'




export function Coffeeshop(){
    return(
        <div className="w-screen flex flex-col items-center justify-between bg-zinc-200 h-screen max-h-full max-w-full">
            <img className="coffeeshop-img| w-full shadow-2xl  h-40" src={coffeeshop} alt="" />
            <div className='text-container| flex flex-col w-[80%] h-[60%] mb-10 rounded-lg shadow-xl'>
                <p className='title| ml-10 mt-5 text-5xl text-zinc-900 font-black'>Coffeeshop</p>
                <p className='considarations| w-full text-center mt-5 text-xl text-zinc-600'>o coffeeshop é um website que visa chamar atenção de possíveis clientes com um design bem trabalhado e elegante.</p>
                <div className='iterables| w-full h-full flex'>
                    <div className='skills| tablet-m:ml-24 ml-10 justify-center gap-5 text-xl text-zinc-500 flex flex-col w-1/2 h-full'>
                        <p>React.js</p>
                        <p>Tailwindcss</p>
                        <p>Swiper.js</p>
                    </div>
                    <div className='code-buttons| justify-center gap-4 flex flex-col w-1/2 h-full'>
                        <a href="https://github.com/DevDeyvidTav/CoffeeShop" target="_blank"><button className='bg-zinc-900 mr-3 p-1 rounded-full tablet-m:w-72 text-white'>Código</button></a>
                        <a href="http://coffee-shop-wheat.vercel.app" target="_blank"><button className='bg-zinc-900 mr-3 p-1 rounded-full tablet-m:w-72 text-white' >Veja o site</button></a>
                    </div>
                </div>
            </div>
            <a href="/#Projetos"><button className='text-xl font-bold mb-5'>voltar</button></a>
        </div>
    )
}