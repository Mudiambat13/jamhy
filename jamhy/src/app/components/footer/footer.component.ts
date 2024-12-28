import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="bg-gray-900 text-gray-300">
      <!-- Section principale -->
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- À propos -->
          <div>
            <div class="flex items-center space-x-2 mb-6">
              <div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <i class="fas fa-building text-white"></i>
              </div>
              <span class="text-xl font-bold text-white">JAMHY</span>
            </div>
            <p class="text-gray-400 mb-4">
              Solutions innovantes en construction et énergie, au service du développement de la RD Congo.
            </p>
          </div>

          <!-- Liens rapides -->
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul class="space-y-2">
              <li>
                <a routerLink="/" class="text-gray-400 hover:text-primary transition-colors">Accueil</a>
              </li>
              <li>
                <a routerLink="/services" class="text-gray-400 hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a routerLink="/equipements" class="text-gray-400 hover:text-primary transition-colors">Équipements</a>
              </li>
              <li>
                <a routerLink="/a-propos" class="text-gray-400 hover:text-primary transition-colors">À propos</a>
              </li>
              <li>
                <a routerLink="/contact" class="text-gray-400 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Nos Services</h3>
            <ul class="space-y-2">
              <li>
                <a routerLink="/services" class="text-gray-400 hover:text-primary transition-colors">Construction</a>
              </li>
              <li>
                <a routerLink="/services" class="text-gray-400 hover:text-primary transition-colors">Génie Civil</a>
              </li>
              <li>
                <a routerLink="/services" class="text-gray-400 hover:text-primary transition-colors">Installation Électrique</a>
              </li>
              <li>
                <a routerLink="/services" class="text-gray-400 hover:text-primary transition-colors">Énergie Solaire</a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <i class="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <span>123 Avenue Example, Kolwezi<br>Lualaba, RD Congo</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-phone mr-3 text-primary"></i>
                <span>+243 123 456 789</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope mr-3 text-primary"></i>
                <span>info@jamhy-sarl.com</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-clock mr-3 text-primary"></i>
                <span>Lun-Ven: 8h-17h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Barre de copyright -->
      <div class="border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm text-gray-400">
              © {{ currentYear }} JAMHY Sarl. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
