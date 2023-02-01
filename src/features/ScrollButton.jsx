import { useState } from "react";

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
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
            <div onClick={scrollToTop}>Scroll To Top</div>
        </div>
    );
}

export default ScrollButton;