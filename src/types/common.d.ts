export type Tiles = Record<string, string | null>;

export type MapType = {
    name: string;
    width: number;
    height: number;
    size: number;
    tiles: number[];
    tilesTypes: Tiles
};