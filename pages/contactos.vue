<template>
  <div>
    <p class="text-h4 mb-10 bp-letter">Contactos</p>
    <v-card>
      <v-row align="center">
        <v-col cols="12"
               md="6">
          <v-list two-line>
            <v-list-item-group
              v-model="selected"
              mandatory
              active-class="primary--text"
            >
              <template v-for="(item, index) in contacts">
                <v-list-item :key="index">
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name" class="secondary--text"></v-list-item-title>
<<<<<<< HEAD
=======

>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.account"
                      ></v-list-item-subtitle>
<<<<<<< HEAD
=======

>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
                      <v-list-item-subtitle v-text="`Cooperativa UNIR`"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index < contacts.length - 1"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12"
               md="6"
        align="center"
        >
          <v-scroll-y-transition mode="out-in">
<<<<<<< HEAD
=======
<!--            <div-->
<!--              v-if="!selected"-->
<!--              class="text-h6 grey&#45;&#45;text text&#45;&#45;lighten-1 font-weight-light"-->
<!--              style="align-self: center;"-->
<!--            >-->
<!--              Seleccionar contacto-->
<!--            </div>-->
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
            <v-card
              :key="contacts[selected].id"
              class="pt-6 mx-auto"
              flat
              max-width="400"
            >
              <v-card-text>
                <v-avatar
                  size="88"
                >
                  <v-img
                    :src="`https://cdn.vuetifyjs.com/images/lists/${contacts[selected].avatar}.jpg`"
                  ></v-img>
                </v-avatar>
                <h3 class="text-h5 mb-2">
                  {{ contacts[selected].name }}
                </h3>
                <div class="blue--text subheading font-weight-bold">
                  {{ contacts[selected].account }}
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-row
                class="text-left"
                tag="v-card-text"
              >
                <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
                >
                  Identificación:
                </v-col>
                <v-col>{{ contacts[selected].id }}</v-col>
                <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
                >
                  País:
                </v-col>
                <v-col>
                 {{ contacts[selected].country }}
                </v-col>
                <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
                >
                  Celular:
                </v-col>
                <v-col>{{ contacts[selected].phone }}</v-col>
              </v-row>
            </v-card>
          </v-scroll-y-transition>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    contacts: [],
    selected: 0
  }),
  created () {
    this.contacts = [...this.$store.state.coop.contacts];
  },
  head () {
    return {
      title: 'Contactos'
    };
  }
};
</script>

<style scoped>

</style>
