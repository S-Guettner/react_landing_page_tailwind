const MainText = (props) => {
    return ( 
        <div className="mb-4">
            <img className="inline" src={props.iconSrc} alt="" />
            <p className="inline font-bold">{props.title}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vitae!</p>
        </div>
     );
}
 
export default MainText;