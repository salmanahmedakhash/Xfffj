import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
          JD
        </a>
        <ul class="hidden md:flex items-center space-x-6">
          <li><a href="#about" class="text-gray-300 hover:text-sky-400 transition-colors">About</a></li>
          <li><a href="#skills" class="text-gray-300 hover:text-sky-400 transition-colors">Skills</a></li>
          <li><a href="#projects" class="text-gray-300 hover:text-sky-400 transition-colors">Projects</a></li>
          <li><a href="#contact" class="text-gray-300 hover:text-sky-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
