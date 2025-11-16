import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * PageNotFound Component - 404 error page
 * Following MEAN Stack architecture pattern
 */
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss',
})
export class PageNotFound {}
