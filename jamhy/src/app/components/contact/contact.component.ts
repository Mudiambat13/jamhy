import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-b from-[#5685b3]/10 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto slide-in-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Contactez <span class="text-[#5685b3]">Nous</span>
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Nous sommes à votre écoute pour répondre à vos besoins et vous accompagner dans vos projets
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Informations de contact -->
          <div class="bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition duration-300 slide-up">
            <h2 class="text-2xl font-bold text-[#5685b3] mb-8">Nos Coordonnées</h2>
            
            <div class="space-y-6">
              <div class="flex items-start group">
                <div class="w-12 h-12 bg-[#5685b3]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#5685b3]/20 transition duration-300">
                  <i class="fas fa-map-marker-alt text-[#5685b3] text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p class="text-gray-600">Avenue de la Démocratie<br>Kinshasa, RD Congo</p>
                </div>
              </div>

              <div class="flex items-start group">
                <div class="w-12 h-12 bg-[#5685b3]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#5685b3]/20 transition duration-300">
                  <i class="fas fa-phone text-[#5685b3] text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p class="text-gray-600">+243 812 345 678</p>
                </div>
              </div>

              <div class="flex items-start group">
                <div class="w-12 h-12 bg-[#5685b3]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#5685b3]/20 transition duration-300">
                  <i class="fas fa-envelope text-[#5685b3] text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                  <p class="text-gray-600">info&#64;jamhy-group.com</p>
                </div>
              </div>

              <div class="flex items-start group">
                <div class="w-12 h-12 bg-[#5685b3]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#5685b3]/20 transition duration-300">
                  <i class="fas fa-clock text-[#5685b3] text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Heures d'ouverture</h3>
                  <p class="text-gray-600">Lundi - Vendredi: 8h00 - 17h00<br>Samedi: 8h00 - 12h00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition duration-300 slide-up" style="animation-delay: 0.2s">
            <h2 class="text-2xl font-bold text-[#5685b3] mb-8">Envoyez-nous un message</h2>
            
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="group">
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input type="text" id="name" name="name" [(ngModel)]="contactForm.name"
                       class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#5685b3] focus:border-[#5685b3] transition duration-300">
              </div>

              <div class="group">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" [(ngModel)]="contactForm.email"
                       class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#5685b3] focus:border-[#5685b3] transition duration-300">
              </div>

              <div class="group">
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input type="tel" id="phone" name="phone" [(ngModel)]="contactForm.phone"
                       class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#5685b3] focus:border-[#5685b3] transition duration-300">
              </div>

              <div class="group">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <input type="text" id="subject" name="subject" [(ngModel)]="contactForm.subject"
                       class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#5685b3] focus:border-[#5685b3] transition duration-300">
              </div>

              <div class="group">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" [(ngModel)]="contactForm.message" rows="4"
                         class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5685b3] focus:border-[#5685b3] transition duration-300"></textarea>
              </div>

              <button type="submit" 
                      class="w-full bg-[#5685b3] text-white px-8 py-3 rounded-full hover:bg-[#5685b3]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
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

    input:focus, textarea:focus {
      outline: none;
    }

    .group:hover label {
      color: #5685b3;
      transition: all 0.3s ease;
    }
  `]
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
    // Ajoutez ici la logique d'envoi du formulaire
  }
}
