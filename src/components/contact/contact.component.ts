import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <div class="w-24 h-1 bg-sky-500 mx-auto mb-10"></div>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out!
        </p>
        <div class="flex justify-center items-center space-x-8">
          <a href="mailto:johndoe@email.com" class="text-gray-400 hover:text-sky-400 transition-colors" aria-label="Email">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-sky-400 transition-colors" aria-label="LinkedIn">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-5 6h-3v7h3v-7zm-1.5-2.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM7 9h3v7H7V9z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-sky-400 transition-colors" aria-label="GitHub">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {}
