import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-[#1c1c41] text-gray-300">
      <!-- Main Footer -->
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <h2 class="text-2xl font-bold">
              <span class="text-white">JAMHY</span>
              <span class="text-[#5685b3]">SARL</span>
            </h2>
            <p class="text-sm">
              Expert en construction, génie civil et solutions énergétiques en République Démocratique du Congo.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul class="space-y-2">
              <li><a routerLink="/a-propos" class="hover:text-[#5685b3] transition-colors">À Propos</a></li>
              <li><a routerLink="/services" class="hover:text-[#5685b3] transition-colors">Services</a></li>
              <li><a routerLink="/projets" class="hover:text-[#5685b3] transition-colors">Projets</a></li>
              <li><a routerLink="/equipements" class="hover:text-[#5685b3] transition-colors">Équipements</a></li>
              <li><a routerLink="/contact" class="hover:text-[#5685b3] transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-white font-semibold mb-4">Nos Services</h3>
            <ul class="space-y-2">
              <li>Construction & Génie Civil</li>
              <li>Énergie Solaire</li>
              <li>Laboratoires Médicaux</li>
              <li>Logistique & Transport</li>
              <li>Accommodation</li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white font-semibold mb-4">Contact</h3>
            <ul class="space-y-2">
              <li class="flex items-center space-x-2">
                <i class="fas fa-map-marker-alt text-[#5685b3]"></i>
                <span>Avenue de la Démocratie, Kinshasa, RDC</span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-phone text-[#5685b3]"></i>
                <span>+243 812 345 678</span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-envelope text-[#5685b3]"></i>
                <span>info&#64;jamhy-group.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700">
        <div class="container mx-auto px-4 py-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm">© {{currentYear}} JAMHY. Tous droits réservés.</p>
            <div class="flex space-x-4 mt-4 md:mt-0">
              <a href="#" class="text-sm hover:text-[#5685b3] transition-colors">Politique de confidentialité</a>
              <a href="#" class="text-sm hover:text-[#5685b3] transition-colors">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
