export const Button = ({
    variant = 'primary',
    label,
    disabled,
    backgroundColor,
    onClick,
}) => {
    const btn = document.createElement('button');
    btn.variant = 'button';
    btn.innerText = label;
    btn.addEventListener('click', onClick);

    btn.className = `qld__btn qld__btn--${variant}`;
    btn.style.backgroundColor = backgroundColor;
    btn.disabled = disabled;
  return btn;
};
