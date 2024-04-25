

export type Health = number;
export type Damage = number;
export type Dragon = {
    health: number
    alive: boolean
}
export type FetchHealthFn = () => Promise<Health>
export type FetchDamageFn = () => Promise<Damage>
export type DamageFn = (dragon: Dragon, damage: Damage) => Promise<Dragon>


export const mockDamage: DamageFn = async (dragon, damage) => {
    const health = Math.max(dragon.health - damage, 0);
    const alive = health > 0;
    return { health, alive };
}

export const mockFetchHealth: FetchHealthFn = async () => {
    return 1000;
}

export const mockFetchDamage: FetchDamageFn = async () => {
    return 80;
}