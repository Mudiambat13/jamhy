import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-50 pt-16">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-jamhy-blue to-blue-900 py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold text-white mb-6">Contactez-nous</h1>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour répondre à vos besoins et vous accompagner dans vos projets.
          </p>
        </div>
      </div>

      <!-- Informations de contact et formulaire -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Informations de contact -->
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold text-jamhy-blue mb-6">Nos Coordonnées</h2>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="text-primary text-xl mt-1 mr-4">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p class="text-gray-600">123 Avenue Example, Kolwezi<br>Lualaba, RD Congo</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="text-primary text-xl mt-1 mr-4">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p class="text-gray-600">+243 123 456 789</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="text-primary text-xl mt-1 mr-4">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                    <p class="text-gray-600">info@jamhy-sarl.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="text-primary text-xl mt-1 mr-4">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Heures d'ouverture</h3>
                    <p class="text-gray-600">Lundi - Vendredi: 8h00 - 17h00<br>Samedi: 8h00 - 12h00</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formulaire de contact -->
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold text-jamhy-blue mb-6">Envoyez-nous un message</h2>
              
              <form (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input type="text" id="name" name="name" [(ngModel)]="contactForm.name"
                         class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" [(ngModel)]="contactForm.email"
                         class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input type="tel" id="phone" name="phone" [(ngModel)]="contactForm.phone"
                         class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <input type="text" id="subject" name="subject" [(ngModel)]="contactForm.subject"
                         class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" [(ngModel)]="contactForm.message" rows="4"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"></textarea>
                </div>

                <button type="submit" 
                        class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Implémentez ici la logique d'envoi du formulaire
  }
}
