
export interface Album {
    id: string;
    name: string;
    images: AlbumImage[];
}
interface AlbumImage {
    url: string;
}
