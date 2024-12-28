import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    template: `
        <header class="bg-white shadow-md fixed w-full top-0 z-50">
            <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex justify-between items-center">
                    <div class="flex-shrink-0">
                        <a routerLink="/" class="text-2xl font-bold text-jamhy-blue">JAMHY Sarl</a>
                    </div>
                    
                    <!-- Mobile menu button -->
                    <div class="md:hidden">
                        <button (click)="toggleMenu()" class="text-gray-600 hover:text-gray-900">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Desktop menu -->
                    <div class="hidden md:flex md:items-center md:space-x-8">
                        <a routerLink="/" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}" 
                           class="text-gray-700 hover:text-primary transition-colors">Accueil</a>
                        <a routerLink="/services" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">Services</a>
                        <a routerLink="/projets" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">Projets</a>
                        <a routerLink="/equipements" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">Équipements</a>
                        <a routerLink="/a-propos" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">À propos</a>
                        <a routerLink="/contact" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>

                <!-- Mobile menu -->
                <div [class.hidden]="!isMenuOpen" class="md:hidden mt-4">
                    <div class="flex flex-col space-y-4">
                        <a routerLink="/" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}" 
                           class="text-gray-700 hover:text-primary transition-colors">Accueil</a>
                        <a routerLink="/services" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">Services</a>
                        <a routerLink="/projets" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">Projets</a>
                        <a routerLink="/equipements" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">Équipements</a>
                        <a routerLink="/a-propos" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">À propos</a>
                        <a routerLink="/contact" routerLinkActive="text-primary" 
                           class="text-gray-700 hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    `
})
export class HeaderComponent {
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
