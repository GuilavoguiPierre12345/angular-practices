/**
 * menuItem section type 
 */
export enum MenuItemSectionType {
    "type1", // formation initial
    "type2", // etude avancees
    "type3", // administration
    "type4", // recherches 
    "type5", //documentation
    "type6", //infrastructure
}

/**
 * menuItem definition 
 */
export type MenuItem = {
  typeSection?: MenuItemSectionType;
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
        icon : "important_devices",
        label : "Tableau de bord",
        route : "dashboard",
    },
    {
      typeSection : MenuItemSectionType.type1,
      icon : 'table_chart',
      label : "Departements",
      route : "departements",
      sousMenu : [
        {
          icon : "radio_button_unchecked",
          label : "Medecine Veterinaire",
          route : "medecine-veterinaire",
        },
        {
          icon : "radio_button_unchecked",
          label : "Peche et Aquaculture",
          route : "peche-aquaculture",
        },
        {
          icon : "radio_button_unchecked",
          label : "Technologie & Controle Qualite",
          route : "technologie-controle-qualite",
        },
        
      ]
    },
    {
    typeSection : MenuItemSectionType.type1,
      icon : 'school',
      label : "Scolarite",
      sousMenu : [
        {
          icon : "person_outline",
          label : "Inscription / Reinscription",
          route : "inscription-reinscription",
        },
        {
          icon : "radio_button_unchecked",
          label : "Pré-inscription",
          route : "pre-inscription",
        },
        {
          icon : "radio_button_unchecked",
          label : "Demande d'inscription",
          route : "demande-inscription",
        },
        {
          icon : "radio_button_unchecked",
          label : "Admission",
          route : "admission",
        },
        {
          icon : "radio_button_unchecked",
          label : "Textes cadres",
          route : "textes-cadres",
        },
        {
          icon : "radio_button_unchecked",
          label : "Offre de bourses",
          route : "offre-bourses",
        },
        
      ]
    },
    {
      typeSection : MenuItemSectionType.type2,
      icon : 'event_notet',
      label : "Programmes",
      route : "programmes",
      sousMenu : [
        {
          icon : "radio_button_unchecked",
          label : "Appel à Canditature",
          route : "appel-candidature",
        },
        {
          icon : "group",
          label : "Etudiants",
          sousMenu : [
            {
              icon : 'radio_button_unchecked',
              label : "In",
              route : "etudiants",
              sousMenu : [
                {
                  icon : "person_outline",
                  label : "Inscription / Reinscription",
                  route : "inscription-reinscription",
                },
                {
                  icon : "radio_button_unchecked",
                  label : "Pré-inscription",
                  route : "pre-inscription",
                },
                {
                  icon : "radio_button_unchecked",
                  label : "Demande d'inscription",
                  route : "demande-inscription",
                },
                {
                  icon : "radio_button_unchecked",
                  label : "Admission",
                  route : "admission",
                },
                {
                  icon : "radio_button_unchecked",
                  label : "Textes cadres",
                  route : "textes-cadres",
                },
                {
                  icon : "radio_button_unchecked",
                  label : "Offre de bourses",
                  route : "offre-bourses",
                },
              ]
            },
          ]
        },
      ]
    },
    {
    typeSection : MenuItemSectionType.type3,
      icon : 'people_outline',
      label : "Personnels",
      sousMenu : [
        {
          icon : "radio_button_unchecked",
          label : "Personnels de direction",
          route : "personnels-direction",
        },
        {
          icon : "radio_button_unchecked",
          label : "Enseignants",
          route : "enseignants",
        },
      ]
    },
    {
      typeSection : MenuItemSectionType.type3,
      icon : 'poll',
      label : "Services",
      sousMenu : [
        {
          icon : "radio_button_unchecked",
          label : "Services d'appuis",
          route : "services-appuis",
        },
        {
          icon : "radio_button_unchecked",
          label : "Services tecthniques",
          route : "services-technique",
        },
        {
          icon : "radio_button_unchecked",
          label : "Chefs services",
          route : "chefs-services",
        },
      ]
    },
    {
      typeSection : MenuItemSectionType.type3,
      icon : 'domain',
      label : "Relations exterieurs",
      sousMenu : [
        {
          icon : "radio_button_unchecked",
          label : "Coopérations",
          route : "cooperations",
        },
        {
          icon : "radio_button_unchecked",
          label : "Partenaires",
          route : "partenaires",
        },
        {
          icon : "radio_button_unchecked",
          label : "Stages",
          route : "stages",
        },
      ]
    },
    {
        typeSection : MenuItemSectionType.type4,
      icon : "start",
      label : "Memoires",
      route : "memoires",
    },
    {
        typeSection : MenuItemSectionType.type4,
      icon : "start",
      label : "Articles",
      route : "articles",
    },
    {
        typeSection : MenuItemSectionType.type4,
      icon : "start",
      label : "Activites scientifiques",
      route : "activites-scientifiques",
    },
    {
        typeSection : MenuItemSectionType.type5,
      icon : "cloud_download",
      label : "Cours a telecharger",
      route : "cours-telecharger",
    },
    {
        typeSection : MenuItemSectionType.type6,
      icon : "equalizer",
      label : "Bureaux",
      route : "bureau",
    },
    {
        typeSection : MenuItemSectionType.type6,
      icon : "equalizer",
      label : "Salles de classe",
      route : "salle-classe",
    },
    {
        typeSection : MenuItemSectionType.type6,
      icon : "equalizer",
      label : "Laboratoire",
      route : "laboratoire",
    },
    {
        typeSection : MenuItemSectionType.type6,
      icon : "equalizer",
      label : "Bibliotheque",
      route : "bibliotheque",
    },
    {
        typeSection : MenuItemSectionType.type6,
      icon : "equalizer",
      label : "Quantine",
      route : "quantine",
    },
    {
        typeSection : MenuItemSectionType.type6,
      icon : "equalizer",
      label : "Infirmerie",
      route : "infirmerie",
    },
  ];