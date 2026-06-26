import { useScroll } from "../hooks/useScroll";
import logoXigmaBlanco from "../assets/imagenes/logoXigmaBlanco.png";

const TOP_BAR_HEIGHT = 60;

function TopBar() {
    const scrollY = useScroll();
    const offset = Math.min(scrollY, TOP_BAR_HEIGHT);

    return (
        <div
            className="fixed w-full bg-primary text-white flex items-center justify-center z-60"
            style={{
                height: `${TOP_BAR_HEIGHT}px`,
                transform: `translateY(-${offset}px)`
            }}
        >
            <div className="flex items-center text-sm font-bold font-fira">
                Powered by
                <img
                    src={logoXigmaBlanco}
                    alt=""
                    className="w-14 h-6 ml-2 object-contain"
                />
            </div>
        </div>
    );
}

export default TopBar;