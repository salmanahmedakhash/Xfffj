import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">My Tech Stack</h2>
        <div class="w-24 h-1 bg-sky-500 mx-auto mb-12"></div>
        <div class="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          @for (skill of skills(); track skill) {
            <div class="bg-gray-800 text-gray-200 py-2 px-5 rounded-lg text-lg font-medium shadow-md hover:bg-sky-500 hover:text-white transition-all cursor-default">
              {{ skill }}
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skills = signal<string[]>([
    'Angular', 'TypeScript', 'JavaScript (ESNext)', 'RxJS',
    'NgRx', 'Signals', 'HTML5', 'CSS3',
    'Tailwind CSS', 'SCSS/SASS', 'Gemini API', 'Node.js',
    'Jasmine & Karma', 'Cypress', 'Git & GitHub', 'Figma'
  ]);
}
