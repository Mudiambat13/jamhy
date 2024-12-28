export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    imageUrl: string;
    details: string[];
}

export const SERVICES_DATA: Service[] = [
    {
        id: 1,
        title: 'Construction',
        description: 'Construction de bâtiments, logements sociaux et hôpitaux',
        icon: 'building',
        imageUrl: 'assets/images/construction.jpg',
        details: [
            'Bâtiments commerciaux et résidentiels',
            'Logements sociaux',
            'Infrastructures hospitalières',
            'Constructions industrielles'
        ]
    },
    {
        id: 2,
        title: 'Génie Civil',
        description: 'Génie civil et grands travaux',
        icon: 'road',
        imageUrl: 'assets/images/genie-civil.jpg',
        details: [
            'Routes et ponts',
            'Infrastructures urbaines',
            'Travaux de terrassement',
            'Ouvrages d\'art'
        ]
    },
    // ... autres services
];