import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private host = inject(ElementRef<HTMLElement>);
  isMenuOpen = false;
  dropdownOpen: string | null = null;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.dropdownOpen = null;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.dropdownOpen = null;
  }

  toggleDropdown(name: string): void {
    this.dropdownOpen = this.dropdownOpen === name ? null : name;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node | null;
    if (target && this.host.nativeElement.contains(target)) return;
    this.isMenuOpen = false;
    this.dropdownOpen = null;
  }
}
