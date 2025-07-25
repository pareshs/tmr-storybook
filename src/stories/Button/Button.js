export const createButton = ({
  btnType = 'primary',
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = 'qld__btn';
  //btn.className = ['qld__btn', `qld__btn--${btnType}`, mode].join(' ');
  btn.className = `qld__btn qld__btn--${btnType}`;
  return btn;
};
