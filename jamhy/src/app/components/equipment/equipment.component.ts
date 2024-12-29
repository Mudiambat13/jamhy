import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-b from-[#5685b3]/10 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Nos <span class="text-[#5685b3]">Équipements</span>
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Découvrez notre flotte d'équipements modernes pour tous vos projets de construction
          </p>
        </div>
      </div>
    </section>

    <!-- Equipment Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let equipment of equipments" 
               class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div class="relative h-64 overflow-hidden">
              <img [src]="equipment.image" 
                   [alt]="equipment.name"
                   class="w-full h-full object-cover transition duration-300 hover:scale-110">
              <div class="absolute top-4 right-4">
                <span [class]="equipment.available ? 'bg-[#5685b3]' : 'bg-red-500'" 
                      class="px-4 py-1.5 text-sm text-white rounded-full transition-all duration-300 hover:opacity-90 font-medium">
                  {{ equipment.available ? 'Disponible' : 'Indisponible' }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800 hover:text-[#5685b3] transition-colors">
                {{ equipment.name }}
              </h3>
              <p class="text-gray-600 mb-4">{{ equipment.description }}</p>
              <div class="space-y-2">
                <p *ngFor="let spec of equipment.specifications" 
                   class="text-sm text-gray-500 transition duration-200 hover:text-gray-700 flex items-center space-x-2">
                  <i class="fas fa-check text-[#5685b3] text-xs"></i>
                  <span>{{ spec }}</span>
                </p>
              </div>
              <div class="mt-6">
                <button class="w-full bg-[#5685b3]/10 text-[#5685b3] px-6 py-2.5 rounded-full hover:bg-[#5685b3] hover:text-white transition-all duration-300 font-medium">
                  Plus de détails
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Besoin d'un équipement spécifique ?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contactez-nous pour discuter de vos besoins en équipements et obtenir un devis personnalisé.
        </p>
        <a routerLink="/contact" 
           class="inline-block bg-[#5685b3] text-white px-8 py-3 rounded-full hover:bg-[#5685b3]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Nous Contacter
        </a>
      </div>
    </section>
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
    .grid > div:nth-child(7) { animation-delay: 0.7s; }
    .grid > div:nth-child(8) { animation-delay: 0.8s; }
    .grid > div:nth-child(9) { animation-delay: 0.9s; }
    .grid > div:nth-child(10) { animation-delay: 1s; }
  `]
})
export class EquipmentComponent {
  equipments: Equipment[] = [
    {
      name: 'Excavatrice Hydraulique',
      description: 'Excavatrice puissante pour travaux de terrassement et d\'excavation',
      image: 'assets/images/equipment/excavator.jpg',
      specifications: [
        'Capacité de charge: 20 tonnes',
        'Profondeur de creusement: 6.5m',
        'Moteur: 155 HP',
        'Consommation optimisée'
      ],
      available: true
    },
    {
      name: 'Bulldozer D8',
      description: 'Bulldozer robuste pour travaux de nivellement et terrassement',
      image: 'assets/images/equipment/bulldozer.jpg',
      specifications: [
        'Puissance: 200 HP',
        'Lame: 3.9m de large',
        'Système GPS intégré',
        'Cabine climatisée'
      ],
      available: true
    },
    {
      name: 'Grue Mobile 50T',
      description: 'Grue télescopique pour levage de charges lourdes',
      image: 'assets/images/equipment/crane.jpg',
      specifications: [
        'Capacité de levage: 50 tonnes',
        'Hauteur max: 40m',
        'Portée: 35m',
        'Stabilisateurs hydrauliques'
      ],
      available: false
    },
    {
      name: 'Chargeuse sur Pneus',
      description: 'Chargeuse polyvalente pour manipulation de matériaux',
      image: 'assets/images/equipment/wheelloader.jpg',
      specifications: [
        'Capacité du godet: 3.5m³',
        'Charge utile: 5 tonnes',
        'Transmission automatique',
        'Système de pesage embarqué'
      ],
      available: true
    },
    {
      name: 'Compacteur',
      description: 'Compacteur vibrant pour travaux de compactage',
      image: 'assets/images/equipment/compactor.jpg',
      specifications: [
        'Poids: 12 tonnes',
        'Largeur de travail: 2.1m',
        'Force centrifuge: 280kN',
        'Système de vibration double'
      ],
      available: true
    },
    {
      name: 'Camion Benne',
      description: 'Camion benne pour transport de matériaux',
      image: 'assets/images/equipment/dump-truck.jpg',
      specifications: [
        'Capacité: 20m³',
        'Charge utile: 30 tonnes',
        'Moteur: 400 HP',
        'Benne basculante hydraulique'
      ],
      available: false
    },
    {
      name: 'Pelle sur Chenilles',
      description: 'Pelle mécanique pour travaux d\'excavation précis',
      image: 'assets/images/equipment/tracked-excavator.jpg',
      specifications: [
        'Poids: 25 tonnes',
        'Portée maximale: 10m',
        'Profondeur de fouille: 7m',
        'Rotation 360°'
      ],
      available: true
    },
    {
      name: 'Niveleuse',
      description: 'Niveleuse de précision pour travaux routiers',
      image: 'assets/images/equipment/grader.webp',
      specifications: [
        'Largeur de lame: 4.3m',
        'Puissance: 215 HP',
        'Système de nivellement laser',
        'Articulation centrale'
      ],
      available: true
    },
    {
      name: 'Bétonnière Mobile',
      description: 'Bétonnière autoportée pour production de béton sur site',
      image: 'assets/images/equipment/concrete-mixer.jpg',
      specifications: [
        'Capacité: 9m³',
        'Production horaire: 30m³',
        'Système de dosage automatique',
        'Pompe à béton intégrée'
      ],
      available: false
    },
    {
      name: 'Nacelle Élévatrice',
      description: 'Nacelle télescopique pour travaux en hauteur',
      image: 'assets/images/equipment/nacelle.webp',
      specifications: [
        'Hauteur de travail: 26m',
        'Capacité: 230kg',
        'Déport maximum: 16m',
        'Rotation tourelle: 360°'
      ],
      available: true
    }
  ];
}

interface Equipment {
  name: string;
  description: string;
  image: string;
  specifications: string[];
  available: boolean;
}
