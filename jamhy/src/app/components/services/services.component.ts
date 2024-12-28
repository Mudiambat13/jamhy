import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  icon: string;
  details: string[];
  image: string;
  category: 'construction' | 'energy' | 'equipment' | 'supply';
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styles: [`
    :host {
      display: block;
      padding-top: 64px;
    }
  `]
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Installation Électrique Industrielle',
      description: 'Solutions électriques complètes pour industries et bâtiments',
      icon: 'bolt',
      image: 'assets/images/service-electrical.jpg',
      category: 'energy',
      details: [
        'Installation haute et basse tension',
        'Tableaux électriques industriels',
        'Systèmes de protection électrique',
        'Maintenance préventive et corrective',
        'Audit et diagnostic des installations'
      ]
    },
    {
      title: 'Énergie Solaire',
      description: 'Solutions photovoltaïques pour une énergie propre et durable',
      icon: 'solar-panel',
      image: 'assets/images/service-solar.jpg',
      category: 'energy',
      details: [
        'Panneaux solaires haute performance',
        'Systèmes de stockage d\'énergie',
        'Solutions on-grid et off-grid',
        'Éclairage solaire public',
        'Maintenance et monitoring'
      ]
    },
    {
      title: 'Construction',
      description: 'Construction de bâtiments et infrastructures',
      icon: 'building',
      image: 'assets/images/service-construction.jpg',
      category: 'construction',
      details: [
        'Bâtiments industriels et commerciaux',
        'Logements sociaux',
        'Infrastructures hospitalières',
        'Gestion de projets clés en main'
      ]
    },
    {
      title: 'Génie Civil',
      description: 'Travaux de génie civil et infrastructures',
      icon: 'road',
      image: 'assets/images/service-civil.jpg',
      category: 'construction',
      details: [
        'Routes et ponts',
        'Terrassement',
        'Ouvrages hydrauliques',
        'Infrastructures urbaines'
      ]
    },
    {
      title: 'Automatisation Industrielle',
      description: 'Systèmes de contrôle et automatisation',
      icon: 'microchip',
      image: 'assets/images/service-automation.jpg',
      category: 'energy',
      details: [
        'Systèmes SCADA',
        'Automates programmables',
        'Contrôle de processus',
        'Optimisation énergétique'
      ]
    },
    {
      title: 'Solutions d\'Efficacité Énergétique',
      description: 'Optimisation de la consommation énergétique',
      icon: 'leaf',
      image: 'assets/images/service-efficiency.jpg',
      category: 'energy',
      details: [
        'Audits énergétiques',
        'Solutions LED industrielles',
        'Gestion intelligente de l\'énergie',
        'Récupération de chaleur'
      ]
    },
    {
      title: 'Location d\'Équipements',
      description: 'Location d\'engins et équipements de construction',
      icon: 'truck',
      image: 'assets/images/service-rental.jpg',
      category: 'equipment',
      details: [
        'Engins de chantier',
        'Équipements spécialisés',
        'Service maintenance 24/7',
        'Solutions personnalisées'
      ]
    },
    {
      title: 'Approvisionnement',
      description: 'Fourniture de matériaux et équipements',
      icon: 'boxes',
      image: 'assets/images/service-supply.jpg',
      category: 'supply',
      details: [
        'Matériaux de construction',
        'Équipements électriques',
        'Pièces de rechange',
        'Gestion des stocks'
      ]
    }
  ];

  selectedCategory: string = 'all';

  filterServices(category: string) {
    this.selectedCategory = category;
  }

  get filteredServices() {
    if (this.selectedCategory === 'all') {
      return this.services;
    }
    return this.services.filter(service => service.category === this.selectedCategory);
  }
}
