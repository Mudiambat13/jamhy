import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="assets/images/hero/hero.jpg" alt="JAMHY Construction" 
             class="w-full h-full object-cover opacity-70">
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div class="container mx-auto px-4 z-10">
        <div class="max-w-3xl text-white slide-in-left">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Construisons Ensemble<br>
            <span class="text-[#1f4468]">Votre Avenir</span>
          </h1>
          <p class="text-xl mb-8 text-gray-200">
            Expert en construction, génie civil et solutions énergétiques en République Démocratique du Congo
          </p>
          <div class="flex gap-4">
            <a routerLink="/contact" 
               class="bg-[#5685b3] hover:bg-[#5685b3]/90 text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
               Contactez-nous
            </a>
            <a routerLink="/projets" 
               class="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full backdrop-blur transition duration-300">
               Nos Projets
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Highlights -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16 fade-in">
          Nos Domaines d'Expertise
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index"
               class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 slide-up"
               [style.animation-delay]="i * 0.2 + 's'">
            <div class="w-14 h-14 bg-[#5685b3]/10 rounded-full flex items-center justify-center mb-4">
              <i [class]="service.icon" class="text-[#5685b3] text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{service.title}}</h3>
            <p class="text-gray-600">{{service.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-[#5685b3] text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in">
          <div *ngFor="let stat of stats" class="counter-up">
            <div class="text-4xl font-bold mb-2">{{stat.value}}</div>
            <div class="text-sm opacity-80">{{stat.label}}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 fade-in">Prêt à Démarrer Votre Projet ?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto fade-in">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins en construction et obtenir une consultation gratuite.
        </p>
        <a routerLink="/contact" 
           class="inline-block bg-[#5685b3] hover:bg-[#5685b3]/90 text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
          Demander un Devis
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

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .slide-in-left {
      animation: slideInLeft 1s ease-out;
    }

    .slide-up {
      opacity: 0;
      animation: slideUp 0.6s ease-out forwards;
    }

    .fade-in {
      animation: fadeIn 1s ease-out;
    }

    .counter-up {
      opacity: 0;
      animation: fadeIn 1s ease-out forwards;
    }
  `]
})
export class HomeComponent {
  services = [
    {
      title: 'Construction',
      description: 'Construction de bâtiments industriels, hôpitaux et infrastructures',
      icon: 'fas fa-building'
    },
    {
      title: 'Énergie Solaire',
      description: 'Solutions d\'énergie renouvelable pour entreprises et industries',
      icon: 'fas fa-solar-panel'
    },
    {
      title: 'Génie Civil',
      description: 'Travaux de terrassement et construction d\'ouvrages d\'art',
      icon: 'fas fa-hard-hat'
    },
    {
      title: 'Laboratoires',
      description: 'Construction et équipement de laboratoires médicaux',
      icon: 'fas fa-flask'
    },
    {
      title: 'Logistique',
      description: 'Services de ravitaillement en carburant et lubrifiants',
      icon: 'fas fa-truck'
    },
    {
      title: 'Accommodation',
      description: 'Solutions d\'hébergement pour sites industriels et miniers',
      icon: 'fas fa-home'
    }
  ];

  stats = [
    { value: '150+', label: 'Projets Réalisés' },
    { value: '15+', label: 'Années d\'Expérience' },
    { value: '200+', label: 'Employés' },
    { value: '50+', label: 'Clients Satisfaits' }
  ];
}
