import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

function ScrollToTop ()  {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };

    });
    return (
        <div className="fixed-bottom mx-1 bottom-2 end-2">
            { isVisible ?
            <button 
            type="button" 
            onClick={scrollToTop} 
            className="opacity-75 btn btn-primary btn-floating btn-lg"
            > 
            <BiArrowFromBottom />
            </button>
            : null
            }
        </div>
    )
}

export default ScrollToTop;