import { mount, withOptions } from 'react-mounter';

export const mountLayout = withOptions({
    rootId: 'layout',
}, (...args) => {
  $('#loader').addClass('hidden');
  $('#layout').removeClass('hidden');

  return mount(...args);
});
