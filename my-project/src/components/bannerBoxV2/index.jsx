import "../bannerBoxV2/style.css";

const BannerBoxV2 = (props) =>{
    return ( 
        <div className="bannerBoxV2 w-full h-[215px] overflow-hidden rounded-md group relative"> 
            <img src = {props.image} className="w-full h-full object-cover transition-all duration-150 group-hover:scale-105"/> 
        </div> 
    ) 
}

export default BannerBoxV2; 