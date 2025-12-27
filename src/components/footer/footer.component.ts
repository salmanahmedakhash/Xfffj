import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-gray-800/50 border-t border-gray-700 py-6">
      <div class="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {{ currentYear }} John Doe. All Rights Reserved.</p>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
