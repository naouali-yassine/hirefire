import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

/**
 * SharedModule - Minimizes repetitive imports across feature modules
 * Following MEAN Stack architecture pattern (pages 203-206)
 * 
 * Exports:
 * - Commonly used Angular modules (CommonModule, FormsModule, etc.)
 * - Reusable dumb components (Footer)
 * - Smart components used across features (Header)
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Footer,
    Header
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Footer,
    Header
  ]
})
export class SharedModule { }
