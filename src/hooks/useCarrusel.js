import { useState, useRef, useEffect } from "react";

function useCarrusel({ totalCards, visibleCards, autoPlay = true, delay = 3000 }) {
    const [index, setIndex] = useState(0);

    const maxIndex = totalCards - visibleCards;

    const intervalRef = useRef(null);
    const startX = useRef(0);
    const endX = useRef(0);

    const next = () => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // swipe
    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = startX.current - endX.current;

        if (diff > 50) next();
        if (diff < -50) prev();
    };

    // autoplay
    const startAutoPlay = () => {
        if (!autoPlay) return;
        intervalRef.current = setInterval(next, delay);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, []);

    return {
        index,
        next,
        prev,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        stopAutoPlay,
        startAutoPlay
    };
}

export default useCarrusel;