import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa"

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 600) {
            setVisible(true)
        }
        else if (scrolled <= 600) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div style={{ display: visible ? 'inline' : 'none' }} className="scroll-up-btn">
            <FaArrowCircleUp className="scroll-arrow" onClick={scrollToTop} />
        </div>
    );
}

export default ScrollButton;