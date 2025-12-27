import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage],
  template: `
    <section id="projects" class="py-20 bg-gray-800/50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white text-center mb-6">Featured Projects</h2>
        <div class="w-24 h-1 bg-sky-500 mx-auto mb-12"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects(); track project.title) {
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <img ngSrc="{{project.imageUrl}}" alt="Project screenshot for {{project.title}}" width="500" height="300" class="w-full h-48 object-cover">
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
                <p class="text-gray-400 mb-4 flex-grow">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tag of project.tags; track tag) {
                    <span class="bg-gray-700 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">{{ tag }}</span>
                  }
                </div>
                <div class="mt-auto pt-4 border-t border-gray-700 flex items-center space-x-4">
                  @if (project.liveLink) {
                    <a [href]="project.liveLink" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 font-semibold transition-colors">View Live</a>
                  }
                  @if (project.repoLink) {
                    <a [href]="project.repoLink" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 font-semibold transition-colors">Source Code</a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      title: 'AI-Powered Content Generator',
      description: 'A web app that leverages the Gemini API to generate creative marketing copy, blog posts, and social media updates based on user prompts.',
      imageUrl: 'https://picsum.photos/seed/project1/500/300',
      tags: ['Angular', 'Gemini API', 'Tailwind CSS', 'Signals'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'A complex data visualization dashboard for a SaaS product, featuring real-time updates with RxJS WebSockets and interactive charts.',
      imageUrl: 'https://picsum.photos/seed/project2/500/300',
      tags: ['Angular', 'RxJS', 'D3.js', 'NgRx', 'SCSS'],
      liveLink: '#',
    },
    {
      title: 'E-commerce Platform UI',
      description: 'A pixel-perfect, highly responsive user interface for an e-commerce website, focusing on accessibility and optimal checkout flow.',
      imageUrl: 'https://picsum.photos/seed/project3/500/300',
      tags: ['Angular', 'TypeScript', 'State Management', 'Stripe API'],
      liveLink: '#',
      repoLink: '#',
    },
     {
      title: 'Project Management Tool',
      description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, featuring drag-and-drop functionality.',
      imageUrl: 'https://picsum.photos/seed/project4/500/300',
      tags: ['Angular', 'CDK', 'Firebase', 'Reactive Forms'],
      liveLink: '#',
      repoLink: '#',
    }
  ]);
}
