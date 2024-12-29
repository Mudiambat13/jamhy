import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        <header class="bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300" [class.scrolled]="isScrolled">
            <nav class="container mx-auto px-4 py-2">
                <div class="flex justify-between items-center">
                    <a routerLink="/" class="flex items-center space-x-4">
                        <img src="assets/images/logo/jamhy_sarl_logo.jpg" alt="JAMHY Logo" 
                             class="h-20 w-auto transition-transform duration-300 hover:scale-105">
                        <h1 class="text-2xl font-bold hidden md:block">
                            <span class="text-gray-800">JAMHY</span>
                            <span class="text-[#5685b3]">SARL</span>
                        </h1>
                    </a>
                    
                    <!-- Desktop Menu -->
                    <div class="hidden lg:flex items-center space-x-8">
                        <a *ngFor="let item of menuItems" 
                           [routerLink]="item.path" 
                           routerLinkActive="text-[#5685b3] font-semibold" 
                           [routerLinkActiveOptions]="{paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored'}"
                           class="relative text-gray-700 hover:text-[#5685b3] transition-all duration-300 py-2 group">
                            {{item.label}}
                            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#5685b3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </a>
                        <a routerLink="/contact" 
                           class="bg-[#5685b3] text-white px-6 py-2.5 rounded-full hover:bg-[#5685b3]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            Contact
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button (click)="toggleMobileMenu()" 
                            class="lg:hidden text-gray-700 hover:text-[#5685b3] transition-colors duration-300 focus:outline-none">
                        <svg *ngIf="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg *ngIf="isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </nav>

            <!-- Mobile Menu -->
            <div *ngIf="isMobileMenuOpen" 
                 class="lg:hidden bg-white border-t border-gray-100 shadow-lg">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex flex-col space-y-4">
                        <a *ngFor="let item of menuItems" 
                           [routerLink]="item.path"
                           (click)="toggleMobileMenu()"
                           routerLinkActive="text-[#5685b3] font-semibold"
                           [routerLinkActiveOptions]="{paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored'}"
                           class="text-gray-700 hover:text-[#5685b3] transition-colors duration-300 py-2">
                            {{item.label}}
                        </a>
                        <a routerLink="/contact"
                           (click)="toggleMobileMenu()"
                           class="bg-[#5685b3] text-white text-center px-6 py-2.5 rounded-full hover:bg-[#5685b3]/90 transition-all duration-300">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Padding pour compenser le header fixe -->
        <div class="h-24"></div>
    `,
    styles: [`
        header {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
        }

        header.scrolled {
            @apply shadow-md;
            background: rgba(255, 255, 255, 0.95);
        }

        .router-link-active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: rgb(86,133,179);
            border-radius: 2px;
            transform: scaleX(1);
            transition: transform 0.3s ease;
        }

        @keyframes slideDown {
            from {
                transform: translateY(-10px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .mobile-menu-enter {
            animation: slideDown 0.3s ease forwards;
        }
    `]
})
export class HeaderComponent {
    isScrolled = false;
    isMobileMenuOpen = false;

    menuItems = [
        { path: '/', label: 'Accueil' },
        { path: '/projets', label: 'Projets' },
        { path: '/services', label: 'Services' },
        { path: '/equipements', label: 'Équipements' },
        { path: '/a-propos', label: 'À propos' }
    ];

    constructor() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.onScroll.bind(this));
        }
    }

    onScroll() {
        this.isScrolled = window.scrollY > 20;
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    ngOnDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', this.onScroll.bind(this));
        }
    }
}
