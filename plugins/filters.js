import Vue from 'vue';

Vue.filter(
  'currency',
  value => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(value)
);
