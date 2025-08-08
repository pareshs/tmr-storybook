export const iconsList = ({ iconsData }) => {
    const icons = document.createElement('div');
    icons.className = 'container-fluid';

    const iconContent = "<h2>List of icons</h2>";
    let iconsContentList = '';
    for (let key in iconsData) {
        if (iconsData.hasOwnProperty(key)) {
            const value = iconsData[key]["name"];
            iconsContentList += `
<div class="col">
<div class="icon-body">
    <div class="icon">
        <svg class="qld__icon qld__icon--lead qld__icon--xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <use href="../src/images/icons.svg#${value}"></use>
        </svg>
    </div>
    <code>#${key}</code>
</div>
</div>`;
        }
    }

    let iconsContentWrapStart = '<div class="row-flex">';
    let iconsContentWrapEnd = '</>';
    const iconContents = [iconContent, iconsContentWrapStart, iconsContentList, iconsContentWrapEnd];
    icons.innerHTML = iconContents;

  return icons;
};