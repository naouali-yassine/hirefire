import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Spinner Component - Dumb component for loading state
 * Following MEAN Stack architecture (pages 203-206)
 * Reusable loading spinner exported from SharedModule
 */
@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
})
export class Spinner {
  @Input() show: boolean = false;
  @Input() message: string = 'Loading...';
  
}
