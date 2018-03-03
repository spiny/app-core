import { mount, withOptions } from 'react-mounter';

export const mountLayout = withOptions({
    rootId: 'layout',
}, (...args) => {
  $('#loader').addClass('hidden').on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', () => {
    $('#loader').hide();
  });;
  $('#layout').removeClass('hidden');

  return mount(...args);
});
