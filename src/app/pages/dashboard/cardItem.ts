export type CartType = {
    background : string;
    icon? : string;
    button? : string;
    label? : string;
    description? : string;
    route? :string;
}


export const cardItemDatas : Array<CartType> = [
    {
        background: '#492E87',
        icon:'map',
        button:'arrow_forward_ios',
        label: 'Licences',
        description: '',
        route: 'lmd',
        
    },
    {
        background: '#37B5B6',
        icon:'map',
        button:'arrow_forward_ios',
        label: 'Masters',
        description: '',
        route: 'lmd',
    },
    {
        background: '#63E0E0',
        icon:'map',
        button:'arrow_forward_ios',
        label: 'Doctorats',
        description: '',
        route: 'lmd',
    },
    {
        background: '#FF4D3D',
        icon:'map',
        button:'arrow_forward_ios',
        label: 'Administration',
        description: '',
        route: 'administration',
    },
    {
        background: '#A507AB',
        icon:'map',
        button:'arrow_forward_ios',
        label: 'Recherches',
        description: '',
        route: 'recherche',
    },
    {
        background: '#4398DE',
        icon:'map',
        button:'arrow_forward_ios',
        label: 'Documentation',
        description: '',
        route: 'documentation',
    },
    {
        background: '#6E7480',
        icon:'map',
        button:'arrow_forward_ios',
        label: 'Infrastructure',
        description: '',
        route: 'infrastructure',
    },
];