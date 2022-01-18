import "../styles/index.scss";
import hello from '../public/img/fun.jpg';

const App = () => {
    return (
        <>
        <section className="hero"></section>  
        <main>
            <section>
                <h1>Hello React</h1>
                <img src={hello} alt="" />
            </section>
        </main>
        </>
    )
}

export default App
