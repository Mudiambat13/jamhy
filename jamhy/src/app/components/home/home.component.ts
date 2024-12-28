import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-50 pt-16">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-jamhy-blue to-blue-900 py-32">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl font-bold text-white mb-6">JAMHY Sarl</h1>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Votre partenaire de confiance en construction et solutions énergétiques en RD Congo
          </p>
          <div class="flex justify-center space-x-4">
            <a routerLink="/services" 
               class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors">
              Nos Services
            </a>
            <a routerLink="/contact" 
               class="bg-white hover:bg-gray-100 text-jamhy-blue px-8 py-3 rounded-lg transition-colors">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-jamhy-blue mb-12">Nos Services Principaux</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Construction -->
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="text-primary text-3xl mb-4">
                <i class="fas fa-building"></i>
              </div>
              <h3 class="text-xl font-semibold text-jamhy-blue mb-3">Construction</h3>
              <p class="text-gray-600 mb-4">
                Solutions complètes en construction et génie civil pour vos projets.
              </p>
              <a routerLink="/services" class="text-primary hover:text-primary/80 transition-colors">
                En savoir plus →
              </a>
            </div>

            <!-- Installation Électrique -->
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="text-primary text-3xl mb-4">
                <i class="fas fa-bolt"></i>
              </div>
              <h3 class="text-xl font-semibold text-jamhy-blue mb-3">Installation Électrique</h3>
              <p class="text-gray-600 mb-4">
                Expertise en installations électriques industrielles et commerciales.
              </p>
              <a routerLink="/services" class="text-primary hover:text-primary/80 transition-colors">
                En savoir plus →
              </a>
            </div>

            <!-- Énergie Solaire -->
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="text-primary text-3xl mb-4">
                <i class="fas fa-solar-panel"></i>
              </div>
              <h3 class="text-xl font-semibold text-jamhy-blue mb-3">Énergie Solaire</h3>
              <p class="text-gray-600 mb-4">
                Solutions d'énergie solaire durables et efficaces.
              </p>
              <a routerLink="/services" class="text-primary hover:text-primary/80 transition-colors">
                En savoir plus →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="bg-jamhy-blue py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-6">Prêt à démarrer votre projet ?</h2>
          <p class="text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <a routerLink="/contact" 
             class="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors">
            Obtenir un devis
          </a>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {}
