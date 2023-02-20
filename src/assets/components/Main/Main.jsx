import MainText from './MainText.jsx'

const Main = () => {
    return ( 
        <main className='mb-12'>
            <p className="text-center text-green-700 font-bold">What We Do</p>
            <h2 className="text-center mb-8 text-xl font-bold">We've got everything you need to launch and grow your business</h2>
            <section className="grid grid-cols-2 text-center">
                <MainText title="Brand identity" iconSrc="/images/icons8-etikett-24.png"/>
                <MainText title="Illustration" iconSrc="/images/icons8-design-24.png"/>
                <MainText title="Marketing" iconSrc="/images/icons8-marketing-24.png"/>
                <MainText title="Web Design" iconSrc="/images/icons8-flicker-free-24.png"/>
                
            </section>
        </main>
     );
}
 
export default Main;