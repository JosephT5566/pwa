import { mount, route } from 'navi';
import React from 'react';

import ProfilePage from './views/ProfilePage';
import MainPage from './views/MainPage';
import AssistantPage from './views/AssistantPage';
import DataPage from './views/DataPage';

const appName = 'PWA';

const routes = mount({
    '/': route({
        title: `Home - ${appName}`,
        view: <MainPage />,
    }),
    '/data': route({
        title: `Data - ${appName}`,
        view: <DataPage />,
    }),
    '/assistant': route({
        title: `Assistant - ${appName}`,
        view: <AssistantPage />,
    }),
    '/profile': mount({
        '/': route({
            title: `Profile - ${appName}`,
            view: <ProfilePage />,
        }),
        '/basic': route({
            title: `Profile/Basic Message - ${appName}`,
            getView: () => import('./views/ProfilePage/BasicMessage'),
        }),
        '/upload': route({
            title: `Profile/Upload KYC - ${appName}`,
            getView: () => import('./views/ProfilePage/UploadKYC'),
        }),
        '/doc': route({
            title: `Profile/Documents - ${appName}`,
            getView: () => import('./views/ProfilePage/Documents'),
        }),
        '/about': route({
            title: `Profile/About Us - ${appName}`,
            getView: () => import('./views/ProfilePage/About'),
        }),
    }),
});

export default routes;