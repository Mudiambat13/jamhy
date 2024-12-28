import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styles: [`
    :host {
      display: block;
      padding-top: 64px;
    }
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
      description: 'Notre engagement envers l\'excellence se reflète dans chaque projet que nous réalisons.'
    },
    {
      title: 'Durabilité',
      icon: 'leaf',
      description: 'Nous nous engageons à promouvoir des pratiques respectueuses de l\'environnement.'
    },
    {
      title: 'Intégrité',
      icon: 'handshake',
      description: 'La transparence et l\'honnêteté sont au cœur de toutes nos relations professionnelles.'
    }
  ];

  team: TeamMember[] = [
    {
      name: 'Jean Dupont',
      position: 'Directeur Général',
      image: 'assets/images/team-1.jpg',
      description: '15 ans d\'expérience dans le secteur de la construction'
    },
    {
      name: 'Marie Martin',
      position: 'Directrice Technique',
      image: 'assets/images/team-2.jpg',
      description: 'Experte en solutions énergétiques durables'
    },
    {
      name: 'Pierre Dubois',
      position: 'Chef de Projets',
      image: 'assets/images/team-3.jpg',
      description: 'Spécialiste en gestion de grands projets'
    }
  ];
}

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}
