// scripts.ts
function toggleSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      if (element.style.display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  }
  