import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-3xl font-bold text-center mb-12">Nos Services</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let service of services" 
             class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div class="relative h-64 overflow-hidden">
            <img [src]="service.image" 
                 [alt]="service.name"
                 class="w-full h-full object-cover transition duration-300 hover:scale-110">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 class="text-xl font-semibold text-white">{{ service.name }}</h3>
            </div>
          </div>
          <div class="p-6 transform transition duration-300">
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <div class="space-y-2">
              <p *ngFor="let feature of service.features" 
                 class="text-sm text-gray-500 transition duration-200 hover:text-gray-700">
                • {{ feature }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    :host {
      display: block;
      animation: fadeIn 0.6s ease-out;
    }

    .grid > div {
      animation: fadeIn 0.6s ease-out;
      animation-fill-mode: both;
    }

    .grid > div:nth-child(1) { animation-delay: 0.1s; }
    .grid > div:nth-child(2) { animation-delay: 0.2s; }
    .grid > div:nth-child(3) { animation-delay: 0.3s; }
    .grid > div:nth-child(4) { animation-delay: 0.4s; }
    .grid > div:nth-child(5) { animation-delay: 0.5s; }
    .grid > div:nth-child(6) { animation-delay: 0.6s; }
  `]
})
export class ServicesComponent {
  services = [
    {
      name: 'Construction Hospitalière',
      description: 'Construction et aménagement d\'établissements de santé',
      image: 'assets/images/services/laboratory.jpg',
      features: [
        'Hôpitaux et cliniques',
        'Laboratoires médicaux',
        'Salles blanches',
        'Équipements médicaux spécialisés'
      ]
    },
    {
      name: 'Laboratoires & Recherche',
      description: 'Construction et équipement de laboratoires de recherche',
      image: 'assets/images/services/lab.jpg',
      features: [
        'Laboratoires de recherche',
        'Salles stériles',
        'Systèmes de ventilation spécialisés',
        'Équipements de laboratoire'
      ]
    },
    {
      name: 'Ravitaillement & Logistique',
      description: 'Services de ravitaillement en carburants et lubrifiants',
      image: 'assets/images/services/fuel.jpg',
      features: [
        'Livraison de carburant sur chantier',
        'Stockage de carburant',
        'Lubrifiants industriels',
        'Gestion de flotte'
      ]
    },
    {
      name: 'Terrassement',
      description: 'Travaux de terrassement pour tous types de projets',
      image: 'assets/images/services/terrassement.jpg',
      features: [
        'Excavation de terrain',
        'Nivellement',
        'Remblayage',
        'Préparation de terrain'
      ]
    },
    {
      name: 'Construction',
      description: 'Services complets de construction et génie civil',
      image: 'assets/images/services/construction.jpg',
      features: [
        'Bâtiments industriels',
        'Ouvrages d\'art',
        'Fondations spéciales',
        'Structures en béton'
      ]
    },
    {
      name: 'Location d\'Engins',
      description: 'Location d\'équipements de construction avec opérateur',
      image: 'assets/images/services/location-service.webp',
      features: [
        'Engins de terrassement',
        'Grues et nacelles',
        'Compacteurs',
        'Camions et bennes'
      ]
    },
    {
      name: 'Accommodation',
      description: 'Solutions d\'hébergement pour les projets de construction',
      image: 'assets/images/services/acomm-services.jpg',
      features: [
        'Conteneurs habitables',
        'Bureaux de chantier',
        'Sanitaires mobiles',
        'Espaces de stockage'
      ]
    },
    {
      name: 'Installations Électriques',
      description: 'Solutions complètes d\'installations électriques et énergies renouvelables',
      image: 'assets/images/services/electrique-service.jpg',
      features: [
        'Installation électrique industrielle',
        'Panneaux solaires photovoltaïques',
        'Systèmes de stockage d\'énergie',
        'Maintenance et dépannage'
      ]
    },
    {
      name: 'Énergie Solaire',
      description: 'Solutions d\'énergie solaire pour projets industriels et résidentiels',
      image: 'assets/images/services/solar-services.jpeg',
      features: [
        'Études et dimensionnement',
        'Installation de centrales solaires',
        'Solutions d\'autoconsommation',
        'Monitoring et maintenance'
      ]
    }
  ];
}
