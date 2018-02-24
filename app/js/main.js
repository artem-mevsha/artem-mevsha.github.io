'use strict';

import $ from 'jquery';
// import fontawesome from '@fortawesome/fontawesome';

$(() => {
  // handle click on links
  $('a').on('click', (event) => ga('send', 'event', {
    eventCategory: 'link',
    eventAction: 'click',
    eventLabel: event.target.href
  }));
});
