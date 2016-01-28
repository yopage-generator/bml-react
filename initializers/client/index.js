import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'stylesheets/style.scss';

import createStore from 'store';

import LApplication from 'components/LApplication';

const initApp = (initialState) => {
  const store = createStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <LApplication />
    </Provider>,
    document.getElementById('content')
  );
};

if (__ENV__ === 'development') {
  initApp({
    "addBlockForm": {
      "selectedIndex": null,
      "position": null
    },
    "application": {
      "exitUrl": "/_a/landings/1/analytics",
      "isEditMode": true,
      "landing_version_uuid": "10ba27fa-0628-44fd-af24-8430eea47ca7",
      "api_key": "5d8aa2f240c5d05e992e0e84f58ce965",
      "hasUnsavedChanges": false
    },
    "blocks": [
      {
        "uuid": "44086800-a7e8-0133-a838-746d04736cf8",
        "created_at": "2016-01-28T15:26:22.809+03:00",
        "updated_at": "2016-01-28T15:26:22.809+03:00",
        "data": {
          "logoText": "Лендос!",
          "items": [
            {
              "title": "О нас",
              "url": "google.ru"
            },
            {
              "title": "Услуги",
              "url": "services.ru"
            }
          ]
        },
        "type": "BNavbarType1",
        "view": "BNavbarType1View1"
      },
      {
        "uuid": "440bb620-a7e8-0133-a838-746d04736cf8",
        "created_at": "2016-01-28T15:26:22.812+03:00",
        "updated_at": "2016-01-28T15:26:22.812+03:00",
        "data": {
          "header": "На все 100% !",
          "subheader": "Шаблон для посадочной страницы",
          "backgroundImageUrl": "/assets/images/themes/t1/banner-bg.jpg",
          "items": [
            {
              "icon": "twitter",
              "title": "Twitter",
              "url": "twitter.com"
            },
            {
              "icon": "github",
              "title": "GitHub",
              "url": "github.com"
            }
          ]
        },
        "type": "BMustReadType1",
        "view": "BMustReadType1View1"
      },
      {
        "uuid": "440c3460-a7e8-0133-a838-746d04736cf8",
        "created_at": "2016-01-28T15:26:22.815+03:00",
        "updated_at": "2016-01-28T15:26:22.815+03:00",
        "data": {
          "headerText": "Отдельное спасибо <br />Death to the Stock Photo !",
          "leadText": "Отдельное спасибо <a target=\"_blank\" href=\"http://join.deathtothestockphoto.com/\">Death to the Stock Photo</a> за предоставленные фотографии которые Вы видите в этом шаблоне. <br />Посетите их сайт и получите доступ к огрмному количеству качественных фото.",
          "image": {
            "url": "/assets/images/themes/t1/ipad.png",
            "height": 354,
            "width": 458
          }
        },
        "type": "BContentSectionType1",
        "view": "BContentSectionType1View1"
      },
      {
        "uuid": "440c9d50-a7e8-0133-a838-746d04736cf8",
        "created_at": "2016-01-28T15:26:22.818+03:00",
        "updated_at": "2016-01-28T15:26:22.818+03:00",
        "data": {
          "headerText": "3D макеты на предметах<br /> от PSDCovers",
          "leadText": "Преврати свой двумерный дизайн в высококачественные, трехмерные снимки за секунды используя бесплатные экшены в Photoshop от <a target=\"_blank\" href=\"http://www.psdcovers.com/\">PSDCovers</a>!<br />Посетите их сайт чтобы скачать что-то восхитительное и увидить экшены в действии!",
          "image": {
            "url": "/assets/images/themes/t1/dog.png",
            "height": 383,
            "width": 458
          }
        },
        "type": "BContentSectionType1",
        "view": "BContentSectionType1View2"
      },
      {
        "uuid": "440d06f0-a7e8-0133-a838-746d04736cf8",
        "created_at": "2016-01-28T15:26:22.821+03:00",
        "updated_at": "2016-01-28T15:26:22.821+03:00",
        "data": {
          "headerText": "Шрифты Google Web и<br>иконки Font Awesome",
          "leadText": "Этот шаблон применяет 'Lato' шрифт, часть <a target=\"_blank\" href=\"http://www.google.com/fonts\">библиотеки Google Web Font</a>, также как и <a target=\"_blank\" href=\"http://fontawesome.io\">иконки из Font Awesome</a>.",
          "image": {
            "url": "/assets/images/themes/t1/phones.png",
            "height": 302,
            "width": 458
          }
        },
        "type": "BContentSectionType1",
        "view": "BContentSectionType1View1"
      },
      {
        "uuid": "440d6ea0-a7e8-0133-a838-746d04736cf8",
        "created_at": "2016-01-28T15:26:22.823+03:00",
        "updated_at": "2016-01-28T15:26:22.823+03:00",
        "data": {
          "text": "Присоединяйся к нам в соцсетях!",
          "backgroundImageUrl": "/assets/images/themes/t1/banner-bg.jpg",
          "items": [
            {
              "icon": "twitter",
              "title": "Twitter",
              "url": "twitter.com"
            },
            {
              "icon": "github",
              "title": "GitHub",
              "url": "github.com"
            }
          ]
        },
        "type": "BCTAType1",
        "view": "BCTAType1View1"
      },
      {
        "uuid": "440ddca0-a7e8-0133-a838-746d04736cf8",
        "created_at": "2016-01-28T15:26:22.827+03:00",
        "updated_at": "2016-01-28T15:26:22.827+03:00",
        "data": {
          "copyrightText": "Copyright © BML landing 2016. All Rights Reserved",
          "items": [
            {
              "title": "Домой",
              "url": "#top"
            },
            {
              "title": "О нас",
              "url": "#about"
            },
            {
              "title": "Услуги",
              "url": "#services"
            }
          ]
        },
        "type": "BFooterType1",
        "view": "BFooterType1View1"
      }
    ],
    "modal": {
      "current": null
    }
  });
}

global.initApp = initApp;