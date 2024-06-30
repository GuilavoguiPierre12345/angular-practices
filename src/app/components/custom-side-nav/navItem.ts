/**
 * menuItem definition 
 */
export type MenuItem = {
  icon?: string;
  label: string;
  route?: string;
  sousMenu?: Array<MenuItem>;
};

/**
 * menuItem list 
 */
export const menuItemsData: Array<MenuItem> = [
  {
    icon: 'dashboard',
    label: 'Tableau de bord',
    route: 'dashboard',
  },
  {
    icon: 'apartment',
    label: 'Facultes',
    route: 'facultes',
    sousMenu: [
      {
        icon: 'audit',
        label: 'Faculte des sciences sociales',
        route: 'faculte-sciences-sociales',
        sousMenu: [
          {
            icon: '',
            label: 'Geographie',
            route: 'geographie',
          },
          {
            icon: '',
            label: 'Histoire',
            route: 'histoire',
          },
          {
            icon: '',
            label: 'Philosophie',
            route: 'philosophie',
          },
          {
            icon: '',
            label: 'Sociologie',
            route: 'sociologie',
          },
        ],
      },
      {
        icon: 'aim',
        label: 'Faculte des langues et lettres',
        route: 'faculte-langues-lettres',
        sousMenu: [
          {
            icon: '',
            label: 'Lettre moderne',
            route: 'letre-moderne',
          },
          {
            icon: '',
            label: 'Langue anglaise',
            route: 'langue-anglaise',
          },
          {
            icon: '',
            label: 'Science du Langage',
            route: 'science-langage',
          },
        ],
      },
      {
        icon: 'experiment',
        label: 'Faculte des sciences',
        route: 'faculte-sciences',
        sousMenu: [
          {
            icon: '',
            label: 'Biologie',
            route: 'biologie',
          },
          {
            icon: '',
            label: 'Biologie Medicale',
            route: 'biologie-medicale',
          },
          {
            icon: '',
            label: 'Physique',
            route: 'physique',
          },
          {
            icon: '',
            label: 'Chimie',
            route: 'chimie',
          },
          {
            icon: '',
            label: 'Mathematiques',
            route: 'mathematiques',
          },
        ],
      },
      {
        icon: 'dollar',
        label: 'Sciences economiques et de gestion',
        route: 'sciences-economique-gestion',
        sousMenu: [
          {
            icon: '',
            label: 'Administration des Affaires',
            route: 'addministration-affaires',
          },
          {
            icon: '',
            label: 'Sciences Economiques',
            route: 'sciences-economiques',
          },
          {
            icon: '',
            label: 'Sciences Comptables',
            route: 'sciences-comptables',
          },
          
        ],
      },
    ],
  },
  {
    icon: 'fund',
    label: 'Scolarite',
    sousMenu: [
      {
        icon: 'person_outline',
        label: 'Inscription / Reinscription',
        route: 'inscription-reinscription',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Pré-inscription',
        route: 'pre-inscription',
      },
      {
        icon: 'radio_button_unchecked',
        label: "Demande d'inscription",
        route: 'demande-inscription',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Admission',
        route: 'admission',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Textes cadres',
        route: 'textes-cadres',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Offre de bourses',
        route: 'offre-bourses',
      },
    ],
  },
  {
    icon: 'calendar',
    label: 'Programmes',
    route: 'programmes',
    sousMenu: [
      {
        icon: 'tags',
        label: 'Appel à Canditature',
        route: 'appel-candidature',
      },
      {
        icon: 'team',
        label: 'Etudiants',
        sousMenu: [
              {
                icon: '',
                label: 'Inscription / Reinscription',
                route: 'inscription-reinscription',
              },
              {
                icon: '',
                label: 'Pré-inscription',
                route: 'pre-inscription',
              },
              {
                icon: '',
                label: "Demande d'inscription",
                route: 'demande-inscription',
              },
              {
                icon: '',
                label: 'Admission',
                route: 'admission',
              },
              {
                icon: '',
                label: 'Textes cadres',
                route: 'textes-cadres',
              },
              {
                icon: '',
                label: 'Offre de bourses',
                route: 'offre-bourses',
              },
        ],
      },
    ],
  },
  {
    icon: 'usergroup-add',
    label: 'Personnels',
    sousMenu: [
      {
        icon: 'radio_button_unchecked',
        label: 'Personnels de direction',
        route: 'personnels-direction',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Enseignants',
        route: 'enseignants',
      },
    ],
  },
  {
    icon: 'audit',
    label: 'Services',
    sousMenu: [
      {
        icon: 'radio_button_unchecked',
        label: "Services d'appuis",
        route: 'services-appuis',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Services tecthniques',
        route: 'services-technique',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Chefs services',
        route: 'chefs-services',
      },
    ],
  },
  {
    icon: 'retweet',
    label: 'Relations exterieurs',
    sousMenu: [
      {
        icon: 'radio_button_unchecked',
        label: 'Coopérations',
        route: 'cooperations',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Partenaires',
        route: 'partenaires',
      },
      {
        icon: 'radio_button_unchecked',
        label: 'Stages',
        route: 'stages',
      },
    ],
  },
  {
    icon: 'cluster',
    label: 'Memoires',
    route: 'memoires',
  },
  {
    icon: 'star',
    label: 'Articles',
    route: 'articles',
  },
  {
    icon: 'rise',
    label: 'Activites scientifiques',
    route: 'activites-scientifiques',
  },
  {
    icon: 'download',
    label: 'Cours a telecharger',
    route: 'cours-telecharger',
  },
  {
    icon: 'windows',
    label: 'Bureaux',
    route: 'bureau',
  },
  {
    icon: 'slack',
    label: 'Salles de classe',
    route: 'salle-classe',
  },
  {
    icon: 'experiment',
    label: 'Laboratoire',
    route: 'laboratoire',
  },
  {
    icon: 'database',
    label: 'Bibliotheque',
    route: 'bibliotheque',
  },
  {
    icon: 'wallet',
    label: 'Quantine',
    route: 'quantine',
  },
  {
    icon: 'compas',
    label: 'Infirmerie',
    route: 'infirmerie',
  },
];