import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section avec Icône -->
    <section class="relative py-20 bg-gradient-to-b from-[#5685b3]/10 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <div class="mb-8 flex justify-center">
            <div class="w-24 h-24 bg-[#5685b3]/10 rounded-full flex items-center justify-center">
              <i class="fas fa-building text-[#5685b3] text-4xl"></i>
            </div>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            À Propos de <span class="text-[#5685b3]">JAMHY</span>
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Expert en construction, génie civil et solutions énergétiques en République Démocratique du Congo. 
            Notre engagement envers l'excellence et l'innovation nous permet de réaliser des projets 
            qui dépassent les attentes de nos clients.
          </p>
        </div>
      </div>
    </section>

    <!-- Valeurs Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let value of values" 
               class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-14 h-14 bg-[#5685b3]/10 rounded-full flex items-center justify-center mb-4">
              <i [class]="'fas fa-' + value.icon" class="text-[#5685b3] text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{value.title}}</h3>
            <p class="text-gray-600">{{value.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let member of team" 
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="relative h-64 overflow-hidden">
              <img [src]="member.image" [alt]="member.name" 
                   class="w-full h-full object-cover transition duration-300 hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-1">{{member.name}}</h3>
              <p class="text-[#5685b3] mb-3">{{member.position}}</p>
              <p class="text-gray-600">{{member.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section avec Animation -->
    <section class="py-16 bg-[#5685b3] text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div *ngFor="let stat of stats" 
               class="p-4 transform hover:scale-105 transition-all duration-300">
            <div class="text-4xl font-bold mb-2">{{stat.value}}</div>
            <div class="text-sm opacity-80">{{stat.label}}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    section {
      animation: fadeInUp 0.6s ease-out;
    }

    .stat-card {
      animation: fadeInUp 0.6s ease-out;
      animation-fill-mode: both;
    }

    .stat-card:nth-child(1) { animation-delay: 0.1s; }
    .stat-card:nth-child(2) { animation-delay: 0.2s; }
    .stat-card:nth-child(3) { animation-delay: 0.3s; }
    .stat-card:nth-child(4) { animation-delay: 0.4s; }
  `]
})
export class AboutComponent {
  values = [
    {
      title: 'Innovation',
      icon: 'lightbulb',
      description: 'Nous adoptons les dernières technologies pour offrir des solutions modernes et efficaces.'
    },
    {
      title: 'Qualité',
      icon: 'star',
      description: 'Nous nous engageons à fournir des services et des résultats de la plus haute qualité.'
    },
    {
      title: 'Intégrité',
      icon: 'shield-alt',
      description: 'Nous menons nos activités avec honnêteté, transparence et éthique professionnelle.'
    },
    {
      title: 'Durabilité',
      icon: 'leaf',
      description: 'Nous nous engageons à minimiser notre impact environnemental dans tous nos projets.'
    },
    {
      title: 'Excellence',
      icon: 'trophy',
      description: 'Nous visons l\'excellence dans chaque aspect de notre travail.'
    },
    {
      title: 'Collaboration',
      icon: 'hands-helping',
      description: 'Nous travaillons en étroite collaboration avec nos clients et partenaires.'
    }
  ];

  team = [
    {
      name: 'Jean Amisi',
      position: 'Directeur Général',
      image: 'assets/images/team/jack.avif',
      description: '15 ans d\'expérience dans le secteur de la construction'
    },
    {
      name: 'Mhyce Omari',
      position: 'Directrice générale adjointe',
      image: 'assets/images/team/mhyce.jpg',
      description: 'Experte en solutions énergétiques durables'
    },
    {
      name: 'Pierre Kasongo',
      position: 'Chef de Projets',
      image: 'assets/images/team/pierre.jpg',
      description: 'Spécialiste en gestion de grands projets'
    }
  ];

  stats = [
    { value: '150+', label: 'Projets Réalisés' },
    { value: '15+', label: 'Années d\'Expérience' },
    { value: '200+', label: 'Employés' },
    { value: '50+', label: 'Clients Satisfaits' }
  ];
}
