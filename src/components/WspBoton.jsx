import { FaWhatsapp } from 'react-icons/fa';

function WspBoton() {
    return (
        <a
            href="https://wa.me/51944972519"
            target='_blank'
            rel='noopener noreferrer'
            className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        w-16
        h-16
        rounded-full
        bg-green-500
        text-white
        shadow-xl
        animate-bounce
        hover:scale-110
        transition
        duration-700
        "
        >
            <FaWhatsapp className='text-4xl' />
        </a>
    );
}

export default WspBoton;