import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-20 bg-gray-800/50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">About Me</h2>
        <div class="w-24 h-1 bg-sky-500 mx-auto mb-10"></div>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate frontend developer with over 8 years of experience creating dynamic, responsive, and user-friendly web applications. My expertise lies in the Angular framework, where I leverage signals and modern practices to build performant and maintainable code. I thrive on solving complex problems and I'm always excited to explore new technologies, especially in the realm of AI with tools like the Google Gemini API to create smarter, more intuitive user interfaces.
        </p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
