import { useState, useEffect } from "react";

const useTypingEffect = (fullText: string, typingSpeed = 100) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeoutId = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId); // Limpar o timeout ao desmontar o componente
        }
    }, [index, fullText, typingSpeed]);

    return text;
};

export default useTypingEffect;
