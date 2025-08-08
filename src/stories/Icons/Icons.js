export const iconsList = ({ }) => {
    const icons = document.createElement('div');
    icons.className = 'container-fluid';

    const iconContent = `
        <h2>List of icons</h2>
    `;
    icons.innerHTML = iconContent;
    
  return icons;
};
