import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-b from-[#5685b3]/10 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto slide-in-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Nos <span class="text-[#5685b3]">Projets</span>
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Découvrez nos réalisations et notre expertise à travers nos projets phares
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- Filtres -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button *ngFor="let category of categories"
                  (click)="filterProjects(category)"
                  [class.bg-[#5685b3]]="selectedCategory === category"
                  [class.text-white]="selectedCategory === category"
                  class="px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg
                         hover:transform hover:scale-105"
                  [class.bg-[#5685b3]/10]="selectedCategory !== category"
                  [class.text-[#5685b3]]="selectedCategory !== category">
            {{category}}
          </button>
        </div>

        <!-- Grille de projets -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of filteredProjects; let i = index"
               class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 
                      hover:scale-105 hover:shadow-xl slide-up"
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="relative h-64 overflow-hidden group">
              <img [src]="project.image" 
                   [alt]="project.title"
                   class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
              <div class="absolute bottom-4 left-4 right-4 transform translate-y-full 
                          group-hover:translate-y-0 transition-transform duration-300">
                <span class="inline-block px-4 py-1.5 bg-[#5685b3] text-white text-sm rounded-full">
                  {{project.category}}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800 hover:text-[#5685b3] transition-colors">
                {{project.title}}
              </h3>
              <p class="text-gray-600 mb-4">{{project.description}}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">
                  <i class="fas fa-map-marker-alt text-[#5685b3] mr-2"></i>
                  {{project.location}}
                </span>
                <span class="text-sm text-gray-500">
                  <i class="fas fa-calendar text-[#5685b3] mr-2"></i>
                  {{project.year}}
                </span>
              </div>
              <button class="w-full mt-6 bg-[#5685b3]/10 text-[#5685b3] px-6 py-2.5 rounded-full 
                           hover:bg-[#5685b3] hover:text-white transition-all duration-300 font-medium">
                Voir les détails
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Vous avez un projet en tête ?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à le réaliser.
        </p>
        <a routerLink="/contact" 
           class="inline-block bg-[#5685b3] text-white px-8 py-3 rounded-full hover:bg-[#5685b3]/90 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Démarrer un Projet
        </a>
      </div>
    </section>
  `,
  styles: [`
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .slide-in-left {
      animation: slideInLeft 1s ease-out;
    }

    .slide-up {
      opacity: 0;
      animation: slideUp 0.6s ease-out forwards;
    }
  `]
})
export class ProjectsComponent {
  selectedCategory: string = 'Tous';
  
  categories: string[] = [
    'Tous',
    'Construction',
    'Énergie',
    'Génie Civil',
    'Laboratoires'
  ];

  projects = [
    {
      title: 'Centre Hospitalier Moderne',
      description: 'Construction d\'un hôpital de pointe avec équipements médicaux',
      image: 'assets/images/projects/hospital.jpg',
      category: 'Construction',
      location: 'Kinshasa',
      year: '2023'
    },
    {
      title: 'Installation Solaire Industrielle',
      description: 'Installation de panneaux solaires pour une usine',
      image: 'assets/images/projects/solar.jpg',
      category: 'Énergie',
      location: 'Lubumbashi',
      year: '2023'
    },
    {
      title: 'Pont Routier',
      description: 'Construction d\'un pont routier de 200 mètres',
      image: 'assets/images/projects/bridge.jpg',
      category: 'Génie Civil',
      location: 'Matadi',
      year: '2022'
    },
    {
      title: 'Laboratoire Médical',
      description: 'Construction et équipement d\'un laboratoire d\'analyses',
      image: 'assets/images/projects/lab.jpg',
      category: 'Laboratoires',
      location: 'Goma',
      year: '2022'
    },
    {
      title: 'Complexe Résidentiel',
      description: 'Construction d\'un ensemble résidentiel moderne',
      image: 'assets/images/projects/residential.jpg',
      category: 'Construction',
      location: 'Kinshasa',
      year: '2023'
    },
    {
      title: 'Route Nationale',
      description: 'Réhabilitation d\'une route nationale de 50 km',
      image: 'assets/images/projects/road.jpg',
      category: 'Génie Civil',
      location: 'Kisangani',
      year: '2022'
    }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'Tous') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
  }
}
