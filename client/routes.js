import { FlowRouter } from 'meteor/kadira:flow-router';

import { mountLayout, showLayout } from '/client/mount';
import asyncLoader, { importDefault } from '/client/async-loader';


//FlowRouter.wait();
//FlowRouter.initialize();


FlowRouter.notFound = {
  name: 'error-404',
  //triggersEnter: [routeSecureTrigger()],
  action() {
    asyncLoader([
      importDefault(import('/client/imports/layouts/ErrorLayout'), 'ErrorLayout'),
      importDefault(import('/client/imports/components/errors/NotFound'), 'NotFoundError')
    ]).then(({ ErrorLayout, NotFoundError }) => {
      mountLayout(ErrorLayout, {
        title: 'errors.http.notFound',
        content: NotFoundError,
        contentProps: {
          code: 404
        }
      });
    });
  }
};

FlowRouter.route('/unauthorized', {
  name: 'error-401',
  //triggersEnter: [routeSecureTrigger()],
  action() {
    asyncLoader([
      importDefault(import('/client/imports/layouts/ErrorLayout'), 'ErrorLayout'),
      importDefault(import('/client/imports/components/errors/Unauthorized'), 'UnauthorizedError')
    ]).then(({ ErrorLayout, UnauthorizedError }) => {
      mountLayout(ErrorLayout, {
        title: 'errors.http.unauthorized',
        content: UnauthorizedError,
        contentProps: {
          code: 401
        }
      });
    });
  }
});
