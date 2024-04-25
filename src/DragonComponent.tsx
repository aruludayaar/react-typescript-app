import { useEffect, useState } from "react";
import { Dragon, mockDamage, mockFetchHealth, Health } from "./DragonUtils"
import { useDamage } from "./CustomHook";

function DragonComponent() {
    const [dragon, setDragon] = useState<Dragon>({ health: 0, alive: false });
    const [damage] = useDamage();

    useEffect(() => {
        mockFetchHealth().then((health: Health) => {
            const alive = health > 0;
            setDragon({ health, alive })
        });
    }, [])

    const onClick = () => {
        mockDamage(dragon, damage).then((dragon: Dragon) => {
            setDragon(dragon);
        });
    }

    const status = dragon.alive ? "Alive" : "Defeated";

    return (
        <>
            <form>
                <div className="iblock">
                    <label>Health</label>
                    <input value={dragon.health} readOnly />
                </div>
                <div className="iblock">
                    <label>Damage</label>
                    <input value={damage} readOnly />
                </div>
                <div className="iblock">
                    <label>Status</label>
                    <input value={status} className={status} readOnly />
                </div>
                <div className="iblock">
                    <button type="button" onClick={onClick}>Attack</button>
                </div>
            </form>
        </>
    )

}

export default DragonComponent;