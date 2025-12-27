import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  template: `
    <section id="home" class="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-68px)]">
      <div class="md:w-3/5 text-center md:text-left mb-12 md:mb-0">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4">
          John Doe
        </h1>
        <p class="text-2xl md:text-3xl text-sky-400 mb-6">
          Senior Frontend Angular Engineer
        </p>
        <p class="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-8">
          I build exceptional and accessible web applications with a focus on great user experience, performance, and cutting-edge technologies like the Gemini API.
        </p>
        <a href="#projects" class="bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-all text-lg shadow-lg hover:shadow-sky-500/50">
          View My Work
        </a>
      </div>
      <div class="md:w-2/5 flex justify-center">
        <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-800 border-4 border-sky-500 shadow-2xl">
          <img
            ngSrc="https://picsum.photos/400/400"
            alt="Portrait of John Doe"
            width="400"
            height="400"
            class="object-cover w-full h-full"
            priority>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}
