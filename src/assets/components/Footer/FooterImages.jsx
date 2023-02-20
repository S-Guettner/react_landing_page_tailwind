const FooterImages = (props) => {
    return ( 
        <div className="w-[150px] mx-auto">
            <img className="h-[150px] w-[150px]" src={props.imgSrc} alt="" />
            <p className="text-blue-600">{props.name}</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-cyan-400">{props.price}</p>
        </div>
     );
}
 
export default FooterImages;