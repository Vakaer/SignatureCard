import { useState, useEffect } from "react";

export function useTranslation(lang: string) {
    const [strings, setStrings] = useState<Record<string, string>>({});

    useEffect(() => {
        async function loadStrings() {
            const module = await import(`../localse/${lang}.json`);
            console.log("module", module)
            setStrings(module.default);

        }

        loadStrings();
    }, [lang]);

    return strings;
}
