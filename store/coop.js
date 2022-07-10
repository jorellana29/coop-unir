import { createAxiosPetition } from '@/assets/utils';

export const state = () => ({
  contacts: [
    {
      id: '1104340276',
      name: 'IDROVO VALLEJO WILSON ANDRES',
      country: 'EC',
      phone: '0987001339',
      account: '401010752059',
      avatar: '1'
    },
    {
      id: '1710518000',
      name: 'PACHECO SALAZAR VERONICA ESTHER',
      country: 'EC',
      phone: '0995435948',
      account: '401010152934',
      avatar: '3'
    },
  /*   {
      id: '1712224383',
      name: 'JARAMILLO BORIS NELSON JAVIER',
      country: 'EC',
      phone: '0996702313',
      account: '401010758310',
      avatar: '3'
    }, */
    {
      id: '1712721032',
      name: 'VASCONEZ ABAD ROBERTO CARLOS',
      country: 'EC',
      phone: '0987432762',
      account: '401010303445',
      avatar: '1'
    },
    {
      id: '1716792245',
      name: 'MANOSALVAS ARAGON DAYSI ESTHER',
      country: 'EC',
      phone: '0994627901',
      account: '401010771727',
      avatar: '5'
    },
    {
      id: '1708734833',
      name: 'OYANA MUZO ADRIANA LUCIA',
      country: 'EC',
      phone: '0993389694',
      account: '401010752059',
      avatar: '4'
    },
    {
      id: '1701280669',
      name: 'VELASCO ACOSTA MARIA ANGELICA',
      country: 'EC',
      phone: '0995927367',
      account: '401010771553',
      avatar: '3'
    }
  ],
  sales: {}
});

export const mutations = {
  setSales (state, data) {
    state.sales = data;
  },
};

export const actions = {
  async getSales ({ commit }) {
    const sales = await createAxiosPetition('311000', '401010758310');
    commit('setSales', sales);
  }
};
