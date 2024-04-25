import { useEffect, useState } from "react"
import { mockFetchDamage } from "./DragonUtils";

export const useDamage = () => {
    const [damage, setDamage] = useState(0);
    useEffect(() => {
        mockFetchDamage().then((damage) => {
            setDamage(damage);
        });
    }, []);

    return [damage];
}