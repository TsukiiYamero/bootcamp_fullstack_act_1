import acheronImage from '@/assets/img/acheron-honkai-star-rail-game-hd-wallpaper-uhdpaper.webp';
import AventurineImage from '@/assets/img/aventurine-honkai-star-rail-game-hd-wallpaper-uhdpaper.webp';
import BlackSwan from '@/assets/img/black-swan-honkai-star-rail-hd-wallpaper-uhdpaper.webp';
import Firefly from '@/assets/img/firefly-honkai-star-rail-video-game-hd-wallpaper-uhdpaper.webp';

export const Gallery: Array<{
    path: string,
    img: string,
    title: string,
    description: string
}> = [{
    path: "/acheron",
    img: acheronImage,
    title: "Acheron",
    description: ""
}, {
    path: "/aventurine",
    img: AventurineImage,
    title: "Aventurine",
    description: ""
}, {
    path: "/blackswan",
    img: BlackSwan,
    title: "Black Swan",
    description: ""
}, {
    path: "/firefly",
    img: Firefly,
    title: "Firefly",
    description: ""
}]
