import { Component } from '@angular/core';

/**
 * Footer Component - Dumb component for footer display
 * Following MEAN Stack architecture pattern
 * Glass effect design matching site background
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
}
