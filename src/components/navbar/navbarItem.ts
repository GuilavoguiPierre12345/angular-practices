export type Navbar = {
    label : string;
    icon : string;
    chemin : string;
}

 export const navbarItem : Navbar[] = [
    {
        label : "Clients",
        icon : "bi bi-person-add fs-2",
        chemin : "clients"
    },
    
    {
        label : "Agences",
        icon : "bi bi-bank fs-2",
        chemin : "agences"
    },
    {
        label : "Gerants",
        icon : "bi bi-person-fill-add fs-2",
        chemin : "gerants"
    },
    {
        label : "statistiques",
        icon : "bi bi-bar-chart-line fs-2",
        chemin : "statistiques"
    }
];