export function tooltip(content: string, vertical = 'top', horizontal = 'center') {
   return (node: Element) => {
      const tooltipEl = document.createElement('div');
      tooltipEl.className = 'tooltip';
      tooltipEl.textContent = content;
      document.body.appendChild(tooltipEl);

      function show() {
         const rect = node.getBoundingClientRect();
         tooltipEl.style.display = 'block';

         // Vertical positioning
         if (vertical === 'top') {
            tooltipEl.style.top = (rect.top - tooltipEl.offsetHeight - 5) + 'px';
         } else if (vertical === 'bottom') {
            tooltipEl.style.top = (rect.bottom + 5) + 'px';
         } else { // center
            tooltipEl.style.top = (rect.top + rect.height / 2 - tooltipEl.offsetHeight / 2) + 'px';
         }

         // Horizontal positioning
         if (horizontal === 'left') {
            tooltipEl.style.left = rect.left + 'px';
         } else if (horizontal === 'right') {
            tooltipEl.style.left = (rect.right - tooltipEl.offsetWidth) + 'px';
         } else { // center
            tooltipEl.style.left = (rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2) + 'px';
         }
      }

      function hide() {
         tooltipEl.style.display = 'none';
      }

      node.addEventListener('mouseenter', show);
      node.addEventListener('mouseleave', hide);

      return () => {
         tooltipEl.remove();
         node.removeEventListener('mouseenter', show);
         node.removeEventListener('mouseleave', hide);
      };
   };
}
