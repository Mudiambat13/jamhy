import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Equipment {
  name: string;
  description: string;
  image: string;
  specifications: string[];
  available: boolean;
}

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './equipment.component.html',
  styles: [`
    :host {
      display: block;
      padding-top: 64px;
    }
  `]
})
export class EquipmentComponent {
  equipments: Equipment[] = [
    {
      name: 'Excavatrice Hydraulique',
      description: 'Excavatrice puissante pour travaux de terrassement et d\'excavation',
      image: 'assets/images/equipment-excavator.jpg',
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
      image: 'assets/images/equipment-bulldozer.jpg',
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
      image: 'assets/images/equipment-crane.jpg',
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
      image: 'assets/images/equipment-loader.jpg',
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
      image: 'assets/images/equipment-compactor.jpg',
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
      image: 'assets/images/equipment-dump-truck.jpg',
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
      image: 'assets/images/equipment-tracked-excavator.jpg',
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
      image: 'assets/images/equipment-grader.jpg',
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
      image: 'assets/images/equipment-concrete-mixer.jpg',
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
      image: 'assets/images/equipment-lift.jpg',
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
