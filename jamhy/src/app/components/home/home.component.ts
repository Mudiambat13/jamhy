import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
        <div class="pt-16"> <!-- Espace pour le header fixe -->
            <!-- Hero Section -->
            <section class="relative h-screen">
                <div class="absolute inset-0 bg-black/50"></div>
                <div class="relative h-full flex items-center justify-center text-center text-white px-4">
                    <div class="max-w-3xl">
                        <h1 class="text-5xl md:text-6xl font-bold mb-6">JAMHY Sarl</h1>
                        <p class="text-xl md:text-2xl mb-8">Solutions innovantes en construction et énergie</p>
                        <a routerLink="/contact" 
                           class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors">
                            Contactez-nous
                        </a>
                    </div>
                </div>
            </section>

            <!-- Présentation Section -->
            <section class="py-16 px-4 bg-white">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-bold mb-8 text-jamhy-blue">À propos de nous</h2>
                    <p class="text-lg text-gray-700 mb-6">
                        JAMHY Sarl est une entreprise aux capitaux congolais créée en 2023 dont le siège est 
                        à Kolwezi dans la province du Lualaba.
                    </p>
                    <p class="text-lg text-gray-700">
                        Par des solutions innovantes, elle offre une diversité d'activités qui concilient 
                        modernité, épanouissement et énergie propre.
                    </p>
                </div>
            </section>

            <!-- Services Preview -->
            <section class="py-16 px-4 bg-gray-50">
                <div class="max-w-7xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-12 text-jamhy-blue">Nos Services</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Service Cards -->
                    </div>
                </div>
            </section>
        </div>
    `
})
export class HomeComponent {}
