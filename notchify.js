function notchify(width, height) {
  width = width || '20%';
  height = height || '10%';
  const div = document.getElementById(notchify.divId) || document.createElement('a');
  div.href = 'https://notchify.mattmerr.com';
  div.id = notchify.divId;
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = 'calc((100% - ' + width + ') / 2)';
  div.style.margin = '0 auto';
  div.style.width = width;
  div.style.minHeight = '50px';
  div.style.height = height;
  div.style.background = 'black';
  div.style.zIndex = 999999;
  div.style['border-bottom-left-radius'] = '1em';
  div.style['border-bottom-right-radius'] = '1em';
  document.body.appendChild(div);
  return div;
}
notchify.divId = 'notchify_notch';
notchify();
