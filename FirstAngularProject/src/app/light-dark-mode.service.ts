import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LightDarkModeService {
  private readonly storageKey = 'app-theme';
  private readonly darkThemeClass = 'dark-theme';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setTheme(theme: string): void {
    this.document.body.classList.remove(this.darkThemeClass);
    if (theme === 'dark') {
      this.document.body.classList.add(this.darkThemeClass);
    }
    localStorage.setItem(this.storageKey, theme);
  }

  getTheme(): string {
    const storedTheme = localStorage.getItem(this.storageKey);
    return storedTheme === 'dark' ? 'dark' : 'light';
  }

  toggleTheme(): void {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}