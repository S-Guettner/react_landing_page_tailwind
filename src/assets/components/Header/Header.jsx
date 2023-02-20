import HeaderNumbers from "./HeaderNumbers"

const Header = () => {
    return ( 
        <header className="text-center bg-green-700">
            <p className="pt-5 mb-2 font-bold">Hello There</p>
            <h1 className="text-5xl text-white mb-4 border-b mx-48 pb-6">We Are Glint</h1>
            <p className="w-3/4 mx-auto mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut, nam maxime aperiam ab inventore explicabo id dolor beatae laudantium enim, minima commodi, libero autem odio sunt natus culpa reprehenderit!</p>
                <section className="flex justify-between pb-4">
                    <HeaderNumbers number="127" />
                    <HeaderNumbers number="1505" />
                    <HeaderNumbers number="109" />
                    <HeaderNumbers number="102" />
                </section>
        </header>
     );
}
 
export default Header;